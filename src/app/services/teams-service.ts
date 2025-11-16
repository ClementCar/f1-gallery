import { Injectable } from '@angular/core';
import { Team, Teams } from '../config/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams: Team[] = Teams;

  getTeam(name: string) {
    return this.teams.find(t => t.name === name);
  }
}
