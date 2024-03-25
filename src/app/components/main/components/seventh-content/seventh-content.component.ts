import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-seventh-content',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './seventh-content.component.html',
  styleUrl: './seventh-content.component.scss',
})
export class SeventhContentComponent {}
