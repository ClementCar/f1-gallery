import { Component, OnInit } from '@angular/core';
import { Driver, Team, Teams } from '../config/teams';
import { DriversService } from '../services/drivers';
import { UtilityService } from '../services/utility';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  teams: Team[] = Teams;
  drivers!: Driver[];

  constructor(private driverService: DriversService, private utilityService: UtilityService,
              private route: Router ) {}

  ngOnInit(): void {
    this.drivers = this.driverService.getOrderedDriver();
  }

  getText(text: string){
    return this.utilityService.getLowerText(text);
  }

  lightenDarkenColor(col: string, amt: number): string {
    return this.utilityService.getlightenDarkenColor(col, amt);
  }

  selectDriver() {
    this.route.navigate(['driver-info']);
  }

}
