import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit{

  @ViewChild('bgVideo') video!: ElementRef<HTMLVideoElement>;

  muted: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log(this.video)
    setTimeout(() => {
      if(this.video){
        const v = this.video.nativeElement as HTMLVideoElement;
        console.log(this.video)

        v.muted = true;
        v.setAttribute('playsinline', '');
        v.setAttribute('loop', '');
        v.play();
      }
    },1000)
  }

  changeVolume(){
    const v = this.video.nativeElement as HTMLVideoElement;
    this.muted = !this.muted;
    v.muted = !v.muted;
  }

}
