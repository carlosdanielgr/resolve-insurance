import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  activeProduct = Number(localStorage.getItem('active')) || 1;

  constructor() {}

  setActive(number: number) {
    localStorage.setItem('active', String(number));
    this.activeProduct = number;
  }
}
