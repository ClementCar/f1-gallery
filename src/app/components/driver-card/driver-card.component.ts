import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Driver, Team } from 'src/app/config/teams';
import { UtilityService } from 'src/app/services/utility';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
  standalone: false
})
export class DriverCardComponent  implements OnInit, OnDestroy, AfterViewInit {

  @Input() team!: Team;
  @Input() driver!: Driver;

  @Output() select = new EventEmitter();

  neonFinished: Record<string, boolean> = {};
  seen: Record<string, boolean> = {};
  observer!: IntersectionObserver;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          const driverName = target.getAttribute('data-driver');
          if(!driverName) return;

          if(entry.isIntersecting && !this.seen[driverName]){
            this.seen[driverName] = true;
            target.classList.add('start');
          }
        })
      },
      { threshold: 0.8 }
    )
  }

  selectDriver() {
    this.select.emit();
  }

  getText(text: string){
    return this.utilityService.getLowerText(text);
  }

  lightenDarkenColor(col: string, amt: number): string {
    return this.utilityService.getlightenDarkenColor(col, amt);
  }

  ngAfterViewInit(): void {
    document.querySelectorAll('.neon-anim').forEach(el => {
      this.observer.observe(el);
    })
  }

  onNeonDone(driver: string){
    this.neonFinished[driver] = true;
  }

  isNeonDone(driver: string){
    return !!this.neonFinished[driver];
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
