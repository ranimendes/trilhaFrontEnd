import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ValidaClient } from './valida-client.module';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent implements OnInit {
  private onlyNumber = '[0-9]*';
  private caracteres = '[A-zÀ-ú ]+';

  formClient!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario() {
    this.formClient = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.caracteres),
        Validators.minLength(3),
      ]),
      job: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.onlyNumber),
        Validators.minLength(11),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birth: new FormControl(null, [
        Validators.required,
        ValidaClient.getIdade,
      ]),
      cep: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.onlyNumber),
        Validators.minLength(8),
      ]),
      celular: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.onlyNumber),
        Validators.minLength(11),
      ]),
    });
  }
}
