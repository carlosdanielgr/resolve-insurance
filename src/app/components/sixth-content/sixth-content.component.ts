import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sixth-content',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './sixth-content.component.html',
  styleUrl: './sixth-content.component.scss',
})
export class SixthContentComponent {
  active = 1;
}
