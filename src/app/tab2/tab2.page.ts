import { Component } from '@angular/core';
import { Team, Teams } from '../config/teams';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  teams: Team[] = Teams;

  constructor() {}

}
