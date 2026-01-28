import { Component, OnInit } from '@angular/core';
import { Driver, Team, Teams } from '../config/teams';
import { DriversService } from '../services/drivers';
import { UtilityService } from '../services/utility';
import { Router } from '@angular/router';
import { TransitionService } from '../services/transition-service';

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
              private route: Router, private transition: TransitionService ) {}

  ngOnInit(): void {
    this.drivers = this.driverService.getOrderedDriver();
  }

  selectDriver(driver: Driver) {
    // this.route.navigate(['driver-info', driver.lastname]);
    this.transition.navigate(['driver-info', driver.lastname]);
  }

}
