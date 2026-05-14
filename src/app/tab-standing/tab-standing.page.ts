import { Component, OnInit } from '@angular/core';
import { ApiDriverStanding, ApiTeamStanding, OpenApiService } from '../services/open-api-service';
import { TeamsService } from '../services/teams-service';
import { Driver } from '../config/drivers';
import { Team } from '../config/teams';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab-standing',
  templateUrl: './tab-standing.page.html',
  styleUrls: ['./tab-standing.page.scss'],
  standalone: false
})
export class TabStandingPage implements OnInit {
  driverStandings: standingDriverList[] = [];
  constructorStandings: standginConstructorList[] = [];

  constructor(private apiService: OpenApiService, private teamService: TeamsService, public platform: Platform) { }

  ngOnInit() {
    this.apiService.getDriverStanding().subscribe((drivers: ApiDriverStanding[]) => {
      this.driverStandings = drivers.map(d => {
        const teamData = this.teamService.getDriverWithHisTeamByDriverId(
          this.getDriverId(d.Driver.driverId)
        );

        return{
          position: d.position,
          points: d.points,
          wins: d.wins,
          driver: teamData.driver,
          team: teamData.team
        }
        
        
        
        // return{
        //   position: d.position,
        //   points: d.points,
        //   wins: d.wins,
        //   driver: this.teamService.getDriverById(
        //     this.getDriverId(d.Driver.driverId)
        //   ),
        //   team:
        // } 
      });
    });

    this.apiService.getTeamStanding().subscribe((constructors: ApiTeamStanding[]) => {
      this.constructorStandings= constructors.map(d => ({
        position: d.position,
        points: d.points,
        wins: d.wins,
        constructor: this.teamService.getTeamById(d.Constructor.constructorId)
      }))
    })
  }

  getDriverId(id: string){
    return id.includes('_') ? id.split('_').pop()! : id;
  }

}

interface standingDriverList{
  position: string,
  points: string,
  wins: string,
  driver: Driver,
  team: Team
}

interface standginConstructorList{
  position: string,
  points: string,
  wins: string,
  constructor: Team
}
