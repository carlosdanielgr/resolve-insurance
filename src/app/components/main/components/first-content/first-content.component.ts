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
        first: 'Accidentes',
        second: 'deportivos',
      },
      url: '',
    },
    {
      image: './assets/images/subscribe.webp',
      text: 'Soluciones a tu medida y a tu alcance',
      title: {
        first: 'Planifica',
        second: 'tu retiro',
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
        first: 'Gastos médicos mayores,',
        second: 'más que un seguro, es tu paz mental',
      },
      url: '',
    },
  ];
}
