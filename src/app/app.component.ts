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
    autoplay: false
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
    this.transition.setAnimation(this.anim);
    this.anim.setSpeed(1.8);

    // this.anim.addEventListener('complete', () => {
    //   if(this.transition.leaving()){
    //     this.transition.visible.set(false);
    //     this.transition.leaving.set(false);
    //   }
    // })
  }
}
