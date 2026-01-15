import { Injectable } from '@angular/core';
import { Driver, Team, Teams } from '../config/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams: Team[] = Teams;

  getTeam(name: string) {
    return this.teams.find(t => t.name === name);
  }

  getDriverTeam(name: string): { team: Team, driver: Driver} | null {
    for (const team of this.teams) {
    const driver = team.drivers.find(
      d => d.lastname === name
    );

    if (driver) {
      return { team, driver };
    }
  }

  return null;
    
  }
}
