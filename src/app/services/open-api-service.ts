import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenApiService {
  jolpiApi: string = 'https://api.jolpi.ca/ergast/f1/'

  constructor( private http: HttpClient) {}

  getDriverStanding(): Observable<ApiDriverStanding[]> {
    return this.http
      .get<any>(this.jolpiApi + '2026/driverstandings/')
      .pipe( map(res => res.MRData.StandingsTable.StandingsLists[0].DriverStandings))
  }

  getTeamStanding(): Observable<ApiTeamStanding[]> {
    return this.http
      .get<any>(this.jolpiApi + '2026/constructorstandings/')
      .pipe( map(res => res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings))
  }

}

export interface ApiDriverStanding {
  position: string,
  points: string,
  wins: string,
  Driver: {
    driverId: string
  }
}

export interface ApiTeamStanding {
  position: string,
  points: string,
  wins: string,
  Constructor: {
    constructorId: string
  }

}
