import { Component, OnInit } from '@angular/core';
import { OpenApiService } from '../services/open-api-service';

@Component({
  selector: 'app-tab-standing',
  templateUrl: './tab-standing.page.html',
  styleUrls: ['./tab-standing.page.scss'],
  standalone: false
})
export class TabStandingPage implements OnInit {
  standingOrder: standingList[] = [];

  constructor(private apiService: OpenApiService) { }

  ngOnInit() {
    this.apiService.getStanding().subscribe((r) => {
      this.standingOrder = r;
    })
  }

}

interface standingList{
  position: string,
  points: string,
  wins: string,
  Driver: {
    driverId: string
  }
}
