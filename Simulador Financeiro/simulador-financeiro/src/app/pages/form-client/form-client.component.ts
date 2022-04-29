import { Component, Injector, OnInit } from '@angular/core';
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
import { BasicInfoService } from 'src/app/shared/Service/basic-info.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent extends BasicInfoService implements OnInit {
  public modelo = Cliente;
  private onlyNumber = '[0-9]*';
  private caracteres = '[A-zÀ-ú ]+';
  enviaForm = this.botaoSalvar();

  formClient: any;
  Cliente!: Cliente;

  constructor(
    injector: Injector,
    location: Location,
    router: Router,
    protected fb: FormBuilder,
    private clientStorage: ClientStorageService
  ) {
    super(injector, location, router);
  }

  ngOnInit(): void {
    this.geraTitulo(this.imprimeTitulo());
    this.criarFormulario();
  }


  imprimeTitulo(): string {
    return 'Formulário do Cliente';
  }

  private criarFormulario() {
    this.formClient = this.fb.group({
      nome: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.caracteres),
        Validators.minLength(3),
      ]),
      trabalho: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.caracteres),
        Validators.minLength(3),
      ]),
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

  client() {}

 public navigateImovel() {

     let id = this.formClient.get('id').value;
     let nome = this.formClient.get('nome').value;
     let trabalho = this.formClient.get('trabalho')?.value;
     let cpf = this.formClient.get('cpf').value;
     let email = this.formClient.get('email').value;
     let birth = this.formClient.get('birth').value;
     let cep = this.formClient.get('cep').value;
     let celular = this.formClient.get('celular').value;

     this.Cliente = new Cliente(
      id,
      nome,
      trabalho,
      cpf,
      email,
      birth,
      cep,
      celular,
     );

    this.clientStorage.setClient(this.Cliente);
    this.botaoSalvar();
  }

  public botaoSalvar() {
    const url = this.location.path();
    this.enviarForm = true;

    if (url == '/form-client') {
      this.rota = this.criaRotaImovel();
    }
    return this.rota;
  }

  public criaRotaImovel() {
    return '/form-imovel';
  }

}
