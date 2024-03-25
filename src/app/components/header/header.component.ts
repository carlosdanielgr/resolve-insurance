import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(readonly globalService: GlobalService) {}

  onInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  onItemLink(active: number) {
    location.href = '#products';
    this.globalService.setActive(active);
  }
}
