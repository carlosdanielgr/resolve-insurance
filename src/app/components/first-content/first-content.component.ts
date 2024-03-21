import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './first-content.component.html',
  styleUrl: './first-content.component.scss',
})
export class FirstContentComponent {
  data = [
    {
      image: './assets/images/sports.webp',
      text: 'Soluciones a tu medida y a tu alcance',
      title: {
        first: 'Deportes',
        second: 'individuales y en grupo',
      },
      url: '',
    },
    {
      image: './assets/images/subscribe.webp',
      text: 'Soluciones a tu medida y a tu alcance',
      title: {
        first: 'Invierte',
        second: 'para tu retiro o por si llegas a faltar',
      },
      url: '',
    },
    {
      image: './assets/images/smart-home.webp',
      text: 'Soluciones a tu medida y a tu alcance',
      title: {
        first: 'Daños',
        second: 'y accidentes en el hogar',
      },
      url: '',
    },
    {
      image: './assets/images/families.webp',
      text: 'Soluciones a tu medida y a tu alcance',
      title: {
        first: 'Enfermedades',
        second: 'y accidentes de vida',
      },
      url: '',
    },
  ];
}
