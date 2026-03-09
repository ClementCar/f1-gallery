import { Injectable, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransitionService {
  visible = signal(false);
  leaving = signal(false);
  manualNavigation: boolean = false;
  private animation?: AnimationItem;

  constructor(private router: Router) {
    // this.router.events
    //   .pipe(filter((e) => e instanceof NavigationStart))
    //   .subscribe(() => {
    //     if (!this.manualNavigation) {
    //       this.visible.set(true);
    //     }
    //   });

    // this.router.events
    //   .pipe(filter(e => e instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.visible.set(false);
    //     this.manualNavigation = false;
    //   })
  }

  setAnimation(anim: AnimationItem){
    this.animation = anim;
  }

  async navigate(commands: any[], delay = 900) {
    this.visible.set(true);
    this.leaving.set(false);

    this.animation?.goToAndPlay(0, true);

    await this.sleep(500);

    await this.router.navigate(commands);

    await this.sleep(350);
    // await this.sleep(200); // durée CSS
    this.leaving.set(true);

    await this.sleep(800);

    this.visible.set(false);
    this.leaving.set(false);
  }


  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
