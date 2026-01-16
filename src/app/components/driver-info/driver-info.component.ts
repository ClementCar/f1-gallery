import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";
import { Driver, Team } from 'src/app/config/teams';
import { TeamsService } from 'src/app/services/teams-service';
import { UtilityService } from 'src/app/services/utility';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss'],
  standalone: false
})
export class DriverInfoComponent  implements OnInit {
  current!: { team: Team, driver: Driver} | null;
  name!: string;

  constructor(private utilityService: UtilityService, private activatedRoute: ActivatedRoute,
              private teamService: TeamsService
  ) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name')!;
    this.current = this.teamService.getDriverTeam(this.name);

  }

  lightenDarkenColor(color: string, amt: number){
    return this.utilityService.getlightenDarkenColor(color, amt);
  }

  getLower(name: string){
    return this.utilityService.getLowerText(name);
  }

}
