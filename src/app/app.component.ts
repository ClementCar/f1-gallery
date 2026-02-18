import { Component, computed } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TransitionService } from './services/transition-service';
import { LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  options = {
    path: '/assets/lotties/F1 logo anim.json',
    loop: true,
    autoplay: true
  }

  private anim?: AnimationItem;

  transitionVisible = computed(() => this.transition.visible());
  isLeaving = computed(() => this.transition.leaving());

  constructor(private translateService: TranslateService, public transition: TransitionService) {
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setFallbackLang('fr');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/en|fr/) ? browserLang : 'fr');
  }

  animationCreated(animation: AnimationItem){
    this.anim = animation;
    this.anim.setSpeed(2);
  }
}
