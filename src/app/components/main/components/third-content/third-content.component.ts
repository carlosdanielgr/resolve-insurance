import { Component } from '@angular/core';

@Component({
  selector: 'app-third-content',
  standalone: true,
  imports: [],
  templateUrl: './third-content.component.html',
  styleUrl: './third-content.component.scss',
})
export class ThirdContentComponent {
  data = [
    {
      img: './assets/images/needs.webp',
      desc: 'Escuchamos tus necesidad',
      text: ' El interés puede ser el mismo pero cada uno tenemos necesidades diferentes, el primer contacto es importante.',
    },
    {
      img: './assets/images/strategic.webp',
      desc: 'Solución estratégica',
      text: 'No todas las Aseguradoras cubren lo mismo, con nuestra experiencia cotizamos el seguro que mejor se ajuste a tí y tus necesidades.',
    },
    {
      img: './assets/images/risks.webp',
      desc: 'Gestionamos tus riesgos',
      text: '¿Tuviste algún siniestro y requieres usar tu seguro? Somos expertos en trámites y reclamaciones, nosotros te asesoramos.',
    },
  ];
}
