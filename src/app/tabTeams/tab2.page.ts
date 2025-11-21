import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Team, Teams } from '../config/teams';
import { UtilityService } from '../services/utility';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit, OnDestroy, AfterViewInit {

  teams: Team[] = Teams;
  neonFinished: Record<string, boolean> = {};
  seen: Record<string, boolean> = {};
  observer!: IntersectionObserver;

  constructor(private utilityService: UtilityService, private route: Router) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          const teamName = target.getAttribute('data-team');
          if(!teamName) return;

          if(entry.isIntersecting && !this.seen[teamName]){
            this.seen[teamName] = true;
            target.classList.add('start');
          }
        })
      },
      { threshold: 0.8}
    )
  }

  ngAfterViewInit(): void {
    document.querySelectorAll('.neon-anim').forEach( el => {
      this.observer.observe(el);
    })
  }

  getText(text: string){
    return this.utilityService.getLowerText(text);
  }

  lightenDarkenColor(col: string, amt: number): string {
    return this.utilityService.getlightenDarkenColor(col, amt);
  }

  selectTeam(team: Team) {
    this.route.navigate(['team-info', team.name])
  }

  onNeonDone(name: string){
    this.neonFinished[name] = true;
  }

  isNeonDone(name: string): boolean{
    return !!this.neonFinished[name];
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}
