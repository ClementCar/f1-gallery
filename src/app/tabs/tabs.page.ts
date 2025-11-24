import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  showTabs = true;

  constructor() {}

  onTabsChange(event: any){
    const selected = event.tab;
    this.showTabs = selected !== 'home';
  }

}
