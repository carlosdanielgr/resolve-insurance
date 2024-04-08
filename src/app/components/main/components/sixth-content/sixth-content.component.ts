import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-sixth-content',
  standalone: true,
  imports: [NgTemplateOutlet, NgbNavModule],
  templateUrl: './sixth-content.component.html',
  styleUrl: './sixth-content.component.scss',
})
export class SixthContentComponent {
  URL_IMG = './assets/images/products/';

  continue = [
    {
      image: `${this.URL_IMG}cont-car.webp`,
      text: 'Seguros de auto',
    },
    {
      image: `${this.URL_IMG}cont-pick.png`,
      text: 'Pick ups',
    },
    {
      image: `${this.URL_IMG}cont-uber.webp`,
      text: 'Uber',
    },
    {
      image: `${this.URL_IMG}cont-bike.webp`,
      text: 'Motos',
    },
  ];

  health = [
    {
      image: `${this.URL_IMG}hea-costs.webp`,
      text: 'Gastos Médicos',
    },
    {
      image: `${this.URL_IMG}hea-plants.webp`,
      text: 'Planes de Salud',
    },
    {
      image: `${this.URL_IMG}hea-sports.webp`,
      text: 'Accidentes deportivos',
    },
    {
      image: `${this.URL_IMG}hea-park.webp`,
      text: 'Mascotas',
    },
  ];

  select = [
    {
      image: `${this.URL_IMG}sel-endowment.png`,
      text: 'Dotales',
    },
    {
      image: `${this.URL_IMG}sel-ret.png`,
      text: 'Ahorro para el retiro',
    },
    {
      image: `${this.URL_IMG}sel-early.png`,
      text: 'Ahorro temprano',
    },
    {
      image: `${this.URL_IMG}sel-investment.png`,
      text: 'Inversiones',
    },
  ];

  live = [
    {
      image: `${this.URL_IMG}liv-home.png`,
      text: 'Seguro de hogar',
    },
    {
      image: `${this.URL_IMG}liv-airbnb.png`,
      text: 'Seguro Airbnb',
    },
    {
      image: `${this.URL_IMG}liv-corporate.png`,
      text: 'Empresarial',
    },
    {
      image: `${this.URL_IMG}liv-pymes.png`,
      text: 'PYMEs',
    },
  ];

  responsible = [
    {
      image: `${this.URL_IMG}res-medical.png`,
      text: 'Médicos',
    },
    {
      image: `${this.URL_IMG}res-veterinary.png`,
      text: 'Veterinario',
    },
    {
      image: `${this.URL_IMG}res-professional.png`,
      text: 'Profesionistas independientes',
    },
    {
      image: `${this.URL_IMG}res-psychologist.png`,
      text: 'Psicólogos',
    },
  ];

  constructor(readonly globalService: GlobalService) {}
}
