import { Injectable, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BasicInfoService {
  public formClient!: FormGroup;

  tituloPagina!: string;
  enviarForm: boolean = false;
  rota: string = '';
  aprovacao!: boolean;

  constructor(
    protected injector: Injector,
    protected location: Location,
    protected router: Router
  ) { }
  protected geraTitulo(imprimePagina: string) {
    const url = this.location.path();

    if (url == '') {
      this.tituloPagina = imprimePagina;
    }
    if (url == '/form-client') {
      this.tituloPagina = imprimePagina;
    }
    if (url == '/form-imovel') {
      this.tituloPagina = imprimePagina;
    }
    if (url == '/cliente-aprovado') {
      this.tituloPagina = imprimePagina;
    }
    if (url == '/cliente-reprovado') {
      this.tituloPagina = imprimePagina;
    }
  }
}
