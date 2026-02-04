import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver, Team } from 'src/app/config/teams';
import { TeamsService } from 'src/app/services/teams-service';
import { TransitionService } from 'src/app/services/transition-service';
import { UtilityService } from 'src/app/services/utility';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
  standalone: false
})
export class TeamInfoComponent  implements OnInit {

  name!: string;
  team!: Team;

  constructor(private route: ActivatedRoute, private teamService: TeamsService, private utilityService: UtilityService,
              private transitionService: TransitionService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.team = this.teamService.getTeam(this.name)!;
  }

  lightenDarkenColor(col: string, amt: number): string {
    return this.utilityService.getlightenDarkenColor(col, amt);
  }

  getText(text: string){
    return this.utilityService.getLowerText(text);
  }

  selectDriver(driver: Driver){
    this.transitionService.navigate(['driver-info', driver.lastname]);
  }

}
