import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly formService: FormService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      dateBirth: ['', [Validators.required]],
      state: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
      protect: ['', [Validators.required]],
    });
  }

  onSelectProtect(select: string) {
    this.form.get('protect')?.setValue(select);
  }

  onPostForm() {
    if (this.form.invalid) return;
    const { email, name, phone, dateBirth, state, municipality, protect } =
      this.form.value;
    const body = {
      NOMBRE: name,
      CORREO: email,
      CELULAR: phone,
      'FECHA DE NACIMIENTO': dateBirth,
      ESTADO: state,
      MUNICIPIO: municipality,
      INTERÉS: protect,
      FECHA: new Date(),
    };
    this.formService.postForm(body).subscribe({
      next: () => {
        this.form.reset();
      },
      error: () => {
        this.form.markAllAsTouched();
      },
    });
  }
}
