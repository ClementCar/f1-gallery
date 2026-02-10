import { Component, OnInit } from '@angular/core';
import { DriversService } from '../services/drivers';
import { UtilityService } from '../services/utility';
import { Router } from '@angular/router';
import { TransitionService } from '../services/transition-service';
import { Driver, Drivers } from '../config/drivers';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  drivers: Driver[] = Drivers;

  constructor(private driverService: DriversService, private utilityService: UtilityService,
              private route: Router, private transition: TransitionService ) {}

  ngOnInit(): void {
  }

  selectDriver(driver: Driver) {
    this.transition.navigate(['driver-info', driver.lastname]);
  }

}
