import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FirstContentComponent } from './components/first-content/first-content.component';
import { SecondContentComponent } from './components/second-content/second-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FirstContentComponent, SecondContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resolve-insurance';
}
