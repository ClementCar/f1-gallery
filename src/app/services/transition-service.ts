import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {
  visible = signal(false);

  constructor(private router: Router){}

  async navigate(commands: any[], delay = 600) {
    this.visible.set(true);

    await this.sleep(delay);

    await this.router.navigate(commands);

    await this.sleep(200);

    this.visible.set(false);
  }

  private sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
}
