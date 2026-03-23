import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenApiService {
  
  // https://api.openf1.org/v1/meetings?year=2026&country_name=Singapore
  // https://api.jolpi.ca/ergast/f1/2026/driverstandings/

  // meatiing, Sessions, sting, location

  constructor( private http: HttpClient) {}

  getStanding() {
    return this.http
      .get<any>('https://api.jolpi.ca/ergast/f1/2026/driverstandings/')
      .pipe( map(res => res.MRData.StandingsTable.StandingsLists[0].DriverStandings))
  }

}
