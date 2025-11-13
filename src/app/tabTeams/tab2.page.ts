import { Component } from '@angular/core';
import { Team, Teams } from '../config/teams';
import { UtilityService } from '../services/utility';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  teams: Team[] = Teams;

  constructor(private utilityService: UtilityService) {}

  getText(text: string){
    return this.utilityService.getLowerText(text);
  }

  lightenDarkenColor(col: string, amt: number): string {
    return this.utilityService.getlightenDarkenColor(col, amt);
  }

}
