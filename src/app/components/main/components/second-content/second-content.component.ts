import { Component } from '@angular/core';

@Component({
  selector: 'app-second-content',
  standalone: true,
  imports: [],
  templateUrl: './second-content.component.html',
  styleUrl: './second-content.component.scss',
})
export class SecondContentComponent {
  data = [
    {
      text: 'Gastos Médicos',
      icon: './assets/icons/house+.svg',
    },
    {
      text: 'Vida tradicional',
      icon: './assets/icons/people.svg',
    },
    {
      text: 'Seguros de auto',
      icon: './assets/icons/car-solid.svg',
    },
    {
      text: 'Hogar',
      icon: './assets/icons/house.svg',
    },
    {
      text: 'Mascotas',
      icon: './assets/icons/protect.svg',
    },
  ];

  activeIndex = -1;

  onActiveCard(index: number) {
    this.activeIndex = index;
    location.href = '#form';
  }
}
