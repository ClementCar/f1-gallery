import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHttpLoader } from './translate/custom-http-loader';
import { DriverInfoComponent } from './components/driver-info/driver-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { DriverCardComponent } from './components/driver-card/driver-card.component';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { BackButtonComponent } from './components/back-button/back-button.component';


export function HttpLoaderFactory(http: HttpClient) {
  // @ts-ignore
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, DriverInfoComponent, TeamInfoComponent, BackButtonComponent ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
      platform: {
        'mobile': (win) => {
          const isMobile = (win.innerWidth < 768) ? true: false;
          return isMobile;
        },
        'tablet': (win) => {
          const isTablet = (win.innerWidth > 768 && win.innerWidth < 972) ? true : false;
          return isTablet;
        },
        'desktop': (win) => {
          const isDesktop = (win.innerWidth > 972 ) ? true : false;
          return isDesktop;
        }
      }
    }), 
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomHttpLoader
      }
    }),
    DriverCardComponent,
    LottieComponent
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withFetch()),
    provideLottieOptions({
      player: () => player
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
