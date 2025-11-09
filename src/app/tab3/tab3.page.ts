import { Component, OnInit } from '@angular/core';
import { Driver } from '../config/teams';
import { DriversService } from '../services/drivers';
import { UtilityService } from '../services/utility';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  drivers!: Driver[];

  constructor(private driverService: DriversService, private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.drivers = this.driverService.getOrderedDriver();
  }

  getText(text: string){
    return this.utilityService.getLowerText(text);
  }

}
