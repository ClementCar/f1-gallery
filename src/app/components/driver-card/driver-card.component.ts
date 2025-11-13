import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver, Team } from 'src/app/config/teams';
import { UtilityService } from 'src/app/services/utility';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
  standalone: false
})
export class DriverCardComponent  implements OnInit {

  @Input() team!: Team;
  @Input() driver!: Driver;

  @Output() select = new EventEmitter();

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {}

  selectDriver() {
    this.select.emit();
  }

  getText(text: string){
    return this.utilityService.getLowerText(text);
  }

  lightenDarkenColor(col: string, amt: number): string {
    return this.utilityService.getlightenDarkenColor(col, amt);
  }

}
