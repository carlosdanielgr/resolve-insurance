import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  postForm(body: any) {
    return this.http.post(
      'https://sheet.best/api/sheets/9711e480-47bd-4a09-9676-707014b08528',
      body
    );
  }
}
