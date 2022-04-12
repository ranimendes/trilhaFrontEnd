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

  imaskEmail = {
    mask: String
  };

  imaskCpf = {
    mask: '000.000.000-00'
  }

  imaskCep = {
    mask: '00000-000'
  }
  imaskCel = {
    mask:'(00)00000-0000'
  }
  imaskData = {
    mask: '00/00/0000'
  }

  private onlyNumber = '[0-9]*';
  private caracteres = '[A-zÀ-ú ]+';
  enviaForm = this.botaoSalvar();

  formClient!: FormGroup;

  constructor(
    injector: Injector,
    location: Location,
    router: Router,
    protected fb: FormBuilder,
    protected clientStorage: ClientStorageService,
  ) {
    super(injector, location, router)
  }

  ngOnInit(): void {
    this.geraTitulo(this.imprimeTitulo());
    this.criarFormulario();
  }

  client() {}

  imprimeTitulo():string {
    return 'Formulário do Cliente'
  }

    private criarFormulario() {
    this.formClient = this.fb.group({
      nome: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.caracteres),
        Validators.minLength(3),
      ]),
      trabalho: new FormControl(null, [Validators.required, Validators.pattern(this.caracteres),
        Validators.minLength(3),], ),
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

  navigateImovel() {
    const client: Cliente = new Cliente(
      this.formClient.get('id')?.value,
      this.formClient.get('nome')?.value,
      this.formClient.get('trabalho')?.value,
      this.formClient.get('cpf')?.value,
      this.formClient.get('email')?.value,
      this.formClient.get('birth')?.value,
      this.formClient.get('cep')?.value,
      this.formClient.get('celular')?.value
    );
    this.clientStorage.setClient(client);
    this.botaoSalvar()
  }

  protected botaoSalvar(){
    const url = this.location.path();
    this.enviarForm = true;


    if (url == "/form-client")
      this.rota = this.criaRotaImovel();
      return this.rota;
  }

  protected criaRotaImovel(){
    return "/form-imovel"
  }


}
