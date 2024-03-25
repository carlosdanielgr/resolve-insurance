import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth-content',
  standalone: true,
  imports: [],
  templateUrl: './fourth-content.component.html',
  styleUrl: './fourth-content.component.scss',
})
export class FourthContentComponent {
  data = [
    {
      icon: './assets/icons/ball.svg',
      text: 'Accidentes escolares y deportivos',
    },
    {
      icon: './assets/icons/ubication.svg',
      text: 'Seguros de viaje',
    },
    {
      icon: './assets/icons/money.svg',
      text: 'Ahorro para el retiro',
    },
    {
      icon: './assets/icons/medal.svg',
      text: 'Planes educacionales',
    },
    {
      icon: './assets/icons/house-i.svg',
      text: 'Seguro casa habitación',
    },
    {
      icon: './assets/icons/dollar.svg',
      text: 'Plan de vida financiera',
    },
    {
      icon: './assets/icons/heart.svg',
      text: 'Planes de Salud',
    },
    {
      icon: './assets/icons/biking.svg',
      text: 'Motos y bicicletas',
    },
  ];

  activeIndex = -1;

  onActiveCard(index: number) {
    this.activeIndex = index;
    location.href = '#form';
  }
}
