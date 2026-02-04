import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Driver, Team } from 'src/app/config/teams';
import { UtilityService } from 'src/app/services/utility';
import { IonCardTitle, IonCard } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true
})
export class DriverCardComponent  implements OnInit, OnDestroy, AfterViewInit {

  @Input() team!: Team;
  @Input() driver!: Driver;
  @Input() boxMode?: Boolean = false;

  @Output() select = new EventEmitter<Driver>();

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

  selectDriver(driver: Driver) {
    this.select.emit(driver);
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
