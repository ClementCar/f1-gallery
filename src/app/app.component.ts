import { Component, computed } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TransitionService } from './services/transition-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  transitionVisible = computed(() => this.transition.visible());

  constructor(private translateService: TranslateService, public transition: TransitionService) {
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setFallbackLang('fr');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/en|fr/) ? browserLang : 'fr');
  }
}
