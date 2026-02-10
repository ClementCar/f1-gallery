import { Injectable } from '@angular/core';
import { Team, Teams } from '../config/teams';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  teams: Team[] = Teams;

  // getOrderedDriver(): Driver[] {
  //   return ([] as Driver[]).concat(
  //     ...this.teams.map(team =>
  //       team.drivers.map(driver => ({ ...driver, team: team.name }))
  //     )
  //   ).sort((a, b) => a.rank - b.rank);
  // }
}
