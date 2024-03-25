import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Image {
  url: string;
  isSmall?: boolean;
}

const URL_IMAGE = './assets/images/companies/';

const ORIGINAL_IMAGES: Image[] = [
  {
    url: `${URL_IMAGE}Ana Seguros.png`,
  },
  {
    url: `${URL_IMAGE}Assist Card_color.png`,
  },
  {
    url: `${URL_IMAGE}Axa Seguros.png`,
  },
  {
    url: `${URL_IMAGE}Logo Qualitas_718x718.png`,
  },
  {
    url: `${URL_IMAGE}zurich_600x300.png`,
    isSmall: true,
  },
  {
    url: `${URL_IMAGE}Logo-Ve-Por-Mas-Seguros_1312x843.jpg`,
    isSmall: true,
  },
  {
    url: `${URL_IMAGE}S Atlas_.jpg`,
    isSmall: true,
  },
  {
    url: `${URL_IMAGE}Seguros-GMX.jpg`,
    isSmall: true,
  },
];

@Component({
  selector: 'app-fifth-content',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './fifth-content.component.html',
  styleUrl: './fifth-content.component.scss',
})
export class FifthContentComponent {
  images: Array<Image[]> = [];

  constructor() {
    if (window.innerWidth > 992) this.splitArray(4);
    else if (window.innerWidth > 450) this.splitArray(2);
    else this.splitArray(1);
  }

  splitArray(numParts: number) {
    const partLength = Math.ceil(ORIGINAL_IMAGES.length / numParts);
    for (let index = 0; index < partLength; index++) {
      const start = index * numParts;
      const end = start + numParts;
      this.images.push(ORIGINAL_IMAGES.slice(start, end));
    }
  }
}
