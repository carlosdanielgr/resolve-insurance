import { Component } from '@angular/core';

import { FirstContentComponent } from './components/first-content/first-content.component';
import { SecondContentComponent } from './components/second-content/second-content.component';
import { ThirdContentComponent } from './components/third-content/third-content.component';
import { FourthContentComponent } from './components/fourth-content/fourth-content.component';
import { FifthContentComponent } from './components/fifth-content/fifth-content.component';
import { SeventhContentComponent } from './components/seventh-content/seventh-content.component';
import { SixthContentComponent } from './components/sixth-content/sixth-content.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FirstContentComponent,
    SecondContentComponent,
    ThirdContentComponent,
    FourthContentComponent,
    FifthContentComponent,
    SixthContentComponent,
    SeventhContentComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
