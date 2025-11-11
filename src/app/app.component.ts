import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setFallbackLang('fr');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/en|fr/) ? browserLang : 'fr');
  }
}
