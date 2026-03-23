import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabStandingPage } from './tab-standing.page';

const routes: Routes = [
  {
    path: '',
    component: TabStandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabStandingPageRoutingModule {}
