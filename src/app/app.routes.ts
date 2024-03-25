import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: PrivacyComponent,
    path: 'aviso-de-privacidad',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
