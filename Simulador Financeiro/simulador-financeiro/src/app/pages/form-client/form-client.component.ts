import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cliente } from './shared/cliente.model';

import { ValidaClient } from './valida-client.module';
import { ClientStorageService } from './shared/client-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent implements OnInit {
  private onlyNumber = '[0-9]*';
  private caracteres = '[A-zÀ-ú ]+';

  formClient!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientStorage: ClientStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  client() {}

  navigateImovel() {
    const client: Cliente = new Cliente(
      this.formClient.get('id')?.value,
      this.formClient.get('nome')?.value,
      this.formClient.get('trabalho')?.value,
      this.formClient.get('cpf')?.value,
      this.formClient.get('email')?.value,
      this.formClient.get('dataDeNascimento')?.value,
      this.formClient.get('cep')?.value,
      this.formClient.get('celular')?.value
    );
    this.clientStorage.setClient(client);
      
    this.router.navigate(['form-imovel']);
  }

  private criarFormulario() {
    this.formClient = this.fb.group({
      nome: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.caracteres),
        Validators.minLength(3),
      ]),
      trabalho: new FormControl(null, [Validators.required]),
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
