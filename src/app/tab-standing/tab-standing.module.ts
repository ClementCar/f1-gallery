import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabStandingPageRoutingModule } from './tab-standing-routing.module';

import { TabStandingPage } from './tab-standing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabStandingPageRoutingModule
  ],
  declarations: [TabStandingPage]
})
export class TabStandingPageModule {}
