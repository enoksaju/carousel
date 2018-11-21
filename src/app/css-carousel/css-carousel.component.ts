import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, useAnimation } from '@angular/animations';
import { flipInY, lightSpeedIn, rollIn, zoomIn, bounceIn } from 'ng-animate';

export interface CarouselItem {
  titulo?: string;
  imageUrl: string;
  content?: string;
}

class TimerCarousel {
  private timerObj;
  public fn: Function;
  public Time = 3000;

  constructor(fn: Function) {
    // this.timerObj = setInterval(fn, t);
    this.fn = fn;
  }

  public start(time: number): TimerCarousel {
    this.Time = time;
    if (!this.timerObj) {
      this.stop();
      this.timerObj = setInterval(this.fn, this.Time);
    }
    return this;
  }

  public stop(): TimerCarousel {
    if (this.timerObj) {
      clearInterval(this.timerObj);
      this.timerObj = null;
    }
    return this;
  }

  public reset(newT: number) {
    this.Time = newT;
    return this.stop().start(this.Time);
  }
}

@Component({
  selector: 'app-css-carousel',
  templateUrl: './css-carousel.component.html',
  styleUrls: ['./css-carousel.component.scss'],
  animations: [
    trigger('carousel', [
      state('*', style({ left: '{{left}}%', opacity: '1' }), { params: { left: 0 } }),
      // transition('* => *', animate('0.5s ease-in')),
      //   transition('* => *', useAnimation(flip)),
    ]),

    trigger('slide', [
      transition('* => active', useAnimation(bounceIn, { params: { timing: 0.5 } })),
      // transition('* => inactive', useAnimation(flipOutX))
    ]),
  ],
})
export class CssCarouselComponent implements OnInit {
  @Input() images: CarouselItem[];
  @Input() autoplay = false;
  @Input() interval;

  timer: TimerCarousel;
  private localAutoplay: boolean;

  // public images: CarouselItem[] = IMAGES;
  currentIndex = 0;
  constructor() {}

  ngOnInit() {
    this.localAutoplay = this.autoplay;
    this.timer = new TimerCarousel(() => {
      if (this.localAutoplay) {
        this.next();
      }
    }).start(this.interval);
  }

  next() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.timer.reset(this.interval);
  }

  previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex -= 1;
    }
    this.timer.reset(this.interval);
  }

  mouseEnter() {
    this.localAutoplay = false;
  }

  mouseLeave() {
    this.localAutoplay = this.autoplay;
  }
}
