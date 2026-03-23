import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('../tabHome/tab1.module').then(m => m.Tab1PageModule) },
      { path: 'teams', loadChildren: () => import('../tabTeams/tab2.module').then(m => m.Tab2PageModule) },
      { path: 'drivers', loadChildren: () => import('../tabDrivers/tab3.module').then(m => m.Tab3PageModule) },
      { path: 'standings', loadChildren: () => import('../tab-standing/tab-standing.module').then(m => m.TabStandingPageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
