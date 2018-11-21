import { Component, ViewChild } from '@angular/core';
import { CarouselItem } from './css-carousel/css-carousel.component';
import { MatSidenav } from '@angular/material';
import { trigger, style, state, animate, transition, query, keyframes, stagger, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'transparent',
        style({
          background: '{{fondo}}',
        }),
        { params: { fondo: 'rgba(0,0,0, 0.5)' } },
      ),
      state('colored', style({}), { params: { alto: '*' } }),
      transition('colored => transparent', [
        query('.first-row-toolbar', style({ height: '0' }), { optional: true }),
        group([query('.first-row-toolbar', animate(250, style({ height: '*' })), { optional: true }), animate('250ms ease-out')]),
      ]),
      transition('transparent => colored', [query('.first-row-toolbar', style({ height: '*' }), { optional: true }),
      group([query('.first-row-toolbar', animate(250, style({ height: '0' })), { optional: true }), animate('250ms ease-in')])]),
    ]),
  ],
})
export class AppComponent {
  private navVar: MatSidenav;
  @ViewChild(MatSidenav)
  set sidenav(directive: MatSidenav) {
    // Asignamos la directiva a la variable
    this.navVar = directive;
  }

  state = 'transparent';
  hidehead = true;
  show = true;

  sideNavOpen(event: boolean) {
    // Posición del scroll
    const scrollPosition = window.pageYOffset;
    const widthScreen = window.innerWidth;
    // Tamaño del slide
    const HeighSlide = window.innerHeight * (widthScreen > 764 ? 0.8 : 0.35);
    // Decido si se cambia o no el background del toolbar
    if (!event && scrollPosition <= HeighSlide) {
      // && this.enableTrans) {
      (() => {
        this.show = true;
      })();
      this.state = this.navVar.opened ? 'colored' : 'transparent';
    } else {
      (() => {
        this.show = false;
      })();
      this.state = 'colored';
    }
  }
}
