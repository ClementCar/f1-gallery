import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";
import { Driver, Team } from 'src/app/config/teams';
import { UtilityService } from 'src/app/services/utility';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss'],
  standalone: false
})
export class DriverInfoComponent  implements OnInit {
  team!: Team;
  driver!: Driver;
  name!: string;

  constructor(private utilityService: UtilityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.name = this.activatedRoute.snapshot.paramMap.get('name')!;
    // console.log(this.name)
    this.name = 'Norris';
    this.driver = { name: "Oscar", lastname: "Piastri", age: 24, number: 81, rank: 2, image: "", birthdate: new Date("2001-04-06"), nationality: { name: "Australia", image: "AUS" } };

  }

  getLower(name: string){
    return this.utilityService.getLowerText(name);
  }

}
