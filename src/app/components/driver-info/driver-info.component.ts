import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Driver } from 'src/app/config/drivers';
import { Team } from 'src/app/config/teams';
import { AnimatedBackgroundService } from 'src/app/services/animated-background-service';
import { TeamsService } from 'src/app/services/teams-service';
import { UtilityService } from 'src/app/services/utility';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss'],
  standalone: false,
})
export class DriverInfoComponent implements OnInit, AfterViewInit {

  current!: { team: Team; driver: Driver } | null;
  stats: DriverStat[] = [];
  name!: string;
  canOpen: boolean = false;

  constructor(
    private utilityService: UtilityService,
    private activatedRoute: ActivatedRoute,
    private teamService: TeamsService,
    private bgService: AnimatedBackgroundService,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name')!;
    this.current = this.teamService.getOneDriverWithTeam(this.name);

    this.stats = [
      { key: 'GP', value: this.current.driver.stat.gp },
      { key: 'POINTS', value: this.current.driver.stat.point },
      { key: 'FINISH', value: this.current.driver.stat.finish.nb, count: this.current.driver.stat.finish.ct },
      { key: 'PODIUM', value: this.current.driver.stat.podium },
      { key: 'GRID', value: this.current.driver.stat.grid.nb, count: this.current.driver.stat.grid.ct },
      { key: 'POLE', value: this.current.driver.stat.pole },
      { key: 'CHAMPION', value: this.current.driver.stat.champion },
      { key: 'DNF', value: this.current.driver.stat.dnf },
    ];
  }

  ngAfterViewInit(): void {
    
  }

  lightenDarkenColor(color: string, amt: number) {
    return this.utilityService.getlightenDarkenColor(color, amt);
  }

  getLower(name: string) {
    return this.utilityService.getLowerText(name);
  }
}

interface DriverStat {
  key: string;
  value: number;
  count?: number;
}
