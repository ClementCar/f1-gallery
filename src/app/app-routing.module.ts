import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DriverInfoComponent } from './components/driver-info/driver-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'team-info/:name', component: TeamInfoComponent },
  { path: 'driver-info/:name', component: DriverInfoComponent },
  { path: '**', redirectTo: ''},
  {
    path: 'tab-standing',
    loadChildren: () => import('./tab-standing/tab-standing.module').then( m => m.TabStandingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
