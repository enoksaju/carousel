import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/css-carousel/css-carousel.component';

const IMAGES: CarouselItem[] = [
  {
    titulo: 'Adding Slide',
    content: 'Llanura que que plata todo heridas con celeste, al los consume quemadas las nunca con..',
    imageUrl: 'https://dummyimage.com/1920x16:9/ff00ff/ffffff.png',
  },
  {
    titulo: 'We are covered',
    imageUrl: 'https://dummyimage.com/1920x16:9/ff0000/ffffff.png',
  },
  {
    titulo: 'Generation Gap',
    content: 'That all might a who riot een long, to not that shrine.',
    imageUrl: 'https://dummyimage.com/800x16:9/00aa00/ffffff.png',
  },
  {
    titulo: 'Potter Me\n Este es otro parrafo',
    content: 'Le lui di prieghi a lui occulta nel..',
    imageUrl: 'https://dummyimage.com/400x16:9/0000ff/ffffff.png',
  },
  {
    titulo: 'Pre-School Kids',
    content: 'Kiam iom longe la por surterigxis, terbordo vi bruo scias.',
    imageUrl: 'https://dummyimage.com/2800x16:9/ffff00/000000.png',
  },
  {
    titulo: 'Young Peter Cech',
    content: 'Verschwiegen geschaut es der so still der es stillestehn sanken. An ort was im.',
    imageUrl: 'https://dummyimage.com/4600x16:9/00ffff/ffffff.png',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = IMAGES;
  constructor() {}

  ngOnInit() {}
}
