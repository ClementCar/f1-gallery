import { Injectable } from '@angular/core';
import { Team, TeamAndDriver, Teams } from '../config/teams';
import { Driver, Drivers } from '../config/drivers';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams: Team[] = Teams;
  drivers: Driver[] = Drivers;

  getTeamById(id: string): Team {
    const team = this.teams.find(t => t.id === id);
    if(!team){
      throw new Error(`Team not found for id: ${id}`);
    }
    return team;
  }

  getTeamByName(name: string): Team{
    const team = this.teams.find(t  => t.name === name);
    if(!team){
      throw new Error(`Team not found for name: ${name}`)
    }
    return team;
  }

  getDriverByName(name: string){
    const driver = this.drivers.find(d => d.lastname === name);
    if(!driver){
      throw new Error(`Team not found for name: ${name}`);
    }
    return driver;
  }

  getDriverById(id: string){
    const driver = this.drivers.find(d => d.driverId === id);
    if(!driver){
      throw new Error(`Team not found for name: ${id}`);
    }
    return driver;
  }

  getAllTeams(): Team[] {
    return this.teams;
  }

  getAllTeamsWithDriver(id: string): TeamAndDriver[] {
    return this.teams.map(team => {
      return {
        team,
        drivers: this.drivers.filter(driver => driver.teamId === team.id)
      };
    });
  }

  getOneTeamWithDriver(name: string): TeamAndDriver {
    const team = this.getTeamByName(name);
    if(!team){
      throw new Error(`Team not found for name: ${name}`)
    }
    const drivers = this.drivers.filter(d => d.teamId === team.id)
    return{
      team,
      drivers
    }
  }

  getDriverWithHisTeamByDriverId(id: string): {team: Team, driver: Driver} {
    const driver = this.getDriverById(id);
    if(!driver){
      throw new Error(`Team not found for name: ${id}`)
    }
    const team = this.getTeamById(driver.teamId);
    return{
      team,
      driver
    }
  }

  getOneDriverWithTeam(name: string): {team: Team, driver: Driver} {
    const driver = this.getDriverByName(name);
    if(!driver){
      throw new Error(`Team not found for name: ${name}`)
    }
    const team = this.getTeamById(driver.teamId);
    return{
      team,
      driver
    }
  }
}
