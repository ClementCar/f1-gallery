import { Injectable, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransitionService {
  visible = signal(false);
  leaving = signal(false);
  manualNavigation: boolean = false;

  constructor(private router: Router) {
  //   this.router.events
  //     .pipe(filter((e) => e instanceof NavigationStart))
  //     .subscribe(() => {
  //       if (!this.manualNavigation) {
  //         this.visible.set(true);
  //       }
  //     });

  //   this.router.events
  //     .pipe(filter(e => e instanceof NavigationEnd))
  //     .subscribe(() => {
  //       this.visible.set(false);
  //       this.manualNavigation = false;
  //     })
  }

  async navigate(commands: any[], delay = 600) {
    this.visible.set(true);
    this.leaving.set(false);

    await this.sleep(delay);

    await this.router.navigate(commands);

    this.leaving.set(true);

    await this.sleep(400); // durée CSS

    this.visible.set(false);
    this.leaving.set(false);
  }


  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
