import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ValidaImovel } from './valida-imovel.module';

import { FinaciamentoService } from 'src/app/shared/financiamento.service';

@Component({
  selector: 'app-form-imovel',
  templateUrl: './form-imovel.component.html',
  styleUrls: ['./form-imovel.component.css'],
})
export class FormImovelComponent implements OnInit {
  formImovel = new FormGroup({
    tipo: new FormControl(null, [Validators.required]),
    renda: new FormControl(null, [Validators.required]),
    valor: new FormControl(null, [Validators.required]),
    entrada: new FormControl(null, [
      Validators.required,
      ValidaImovel.valorDaEntrada,
    ]),
    parcelas: new FormControl(null, [
      Validators.required,
      Validators.maxLength(3),
      ValidaImovel.numeroParcelas,
    ]),
  });

  constructor(private service: FinaciamentoService) {}

  ngOnInit(): void {}

  public validarJuros(form: Number) {
    this.service.jurosComposto(form);
    this.save();
  }

  save() {
    const data = JSON.stringify(this.formImovel.value);
    localStorage.setItem('formImovel', data);
  }
}
