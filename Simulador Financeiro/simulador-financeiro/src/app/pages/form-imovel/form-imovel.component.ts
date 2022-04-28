import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientStorageService } from '../form-client/shared/client-storage.service';
import { Cliente } from '../form-client/shared/cliente.model';
import { Imovel } from './shared/imovel.model';
import { ValidaImovel } from './valida-imovel.module';
import { Router } from '@angular/router';
import { ImovelStorageService } from './shared/storage.service';
import { ImovelService } from './imovel.service';
import { BasicInfoService } from 'src/app/shared/Service/basic-info.service';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';

export interface Simulacao {
  client: Cliente;
  imovel: Imovel;
}
@Component({
  selector: 'app-form-imovel',
  templateUrl: './form-imovel.component.html',
  styleUrls: ['./form-imovel.component.css'],
})
export class FormImovelComponent extends BasicInfoService implements OnInit {
  enviarFormulario: any;
  imovelForm!: FormGroup;
  totalValue!: number;
  entryValue!: number;
  simulacao!: ImovelService;

  constructor(
    injector: Injector,
    location: Location,
    router: Router,
    protected fb: FormBuilder,
    protected clientStorage: ClientStorageService,
    protected imovelStorage: ImovelStorageService,
    protected service: ImovelService
  ) {
    super(injector, location, router);
  }

  ngOnInit(): void {
    this.geraTitulo(this.imprimeTitulo());
    this.criarFormulario();
  }

  imprimeTitulo(): string {
    return 'Dados do Imóvel';
  }

  imovel() {}

  private criarFormulario() {
    this.imovelForm = this.fb.group({
      tipo: new FormControl('', [Validators.required]),
      renda: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      entrada: new FormControl('', [
        Validators.required,
        ValidaImovel.valorDaEntrada,
      ]),
      parcelas: new FormControl('', [
        Validators.required,
        ValidaImovel.numeroParcelas,
      ]),
    });
  }

  navigateApprovedDenied() {
    const imovel: Imovel = new Imovel(
      this.imovelForm?.get('tipo')?.value,
      this.imovelForm?.get('renda')?.value,
      this.imovelForm?.get('valor')?.value,
      this.imovelForm?.get('entrada')?.value,
      this.imovelForm?.get('parcelas')?.value
    );

    const aprovadoValor = imovel.valor! - imovel.entrada!;

    const parcela = this.imovelForm?.get('parcelas')?.value;
    const taxAccount = 0.1;
    const rendaTeto = 0.3;

    const initialInstallment =
      (aprovadoValor * (100 + taxAccount * (parcela / 12))) / 100 / parcela;

    imovel.parcelaInicial = initialInstallment;
    imovel.valorAprovado = aprovadoValor;

    this.imovelStorage.setImovel(imovel);

    const valuePlusTax =
      imovel.valorAprovado! + imovel.valorAprovado! * taxAccount;
    const valorMaximoParcelas = valuePlusTax / imovel.parcelas!;
    const valorMinimoRenda = imovel.renda! * rendaTeto;

    if (valorMaximoParcelas > valorMinimoRenda && aprovadoValor < 0) {
      this.router.navigate(['cliente-reprovado']);
    } else {
      this.onSubmit(imovel);
    }
  }

  validacaoCampos(simulacao: Simulacao) {
    if (simulacao.imovel.renda! <= 0) return false;
    if (simulacao.imovel.valor! <= 0) return false;
    if (simulacao.imovel.entrada! <= 0) return false;
    if (simulacao.imovel.parcelas! > 360) return false;
    return true;
  }

  onSubmit(imovel: Imovel) {
    let client: Cliente = this.clientStorage.getClient();
    console.log(client);
    const simulacao: Simulacao = {
      client: {
        nome: client.nome,
        trabalho: client.trabalho,
        cpf: client.cpf,
        email: client.email,
        birth: client.birth,
        cep: client.cep,
        celular: client.celular,
      },
      imovel: {
        tipo: imovel.tipo,
        renda: imovel.renda,
        valor: imovel.valor,
        entrada: imovel.entrada,
        parcelas: imovel.parcelas,
        valorAprovado: imovel.valorAprovado,
        parcelaInicial: imovel.parcelaInicial,
      },
    };

    const isFormValid: boolean = this.validacaoCampos(simulacao);
    if (isFormValid == true) {
      this.service.enviar(simulacao).subscribe({
        next: (response: Simulacao) => {
          console.log(simulacao);
        },
        error: (error: any) => {
          alert(
            'Não conseguimos o envio das informações do seu formulário, pois estamos sem contato com o banco de dados. Tente novamente!'
          );
        },
      });
    } else {
      alert('O seu formulário possui campos inválidos. Tente novamente.');
    }
  }

  voltar() {
    console.log(this.clientStorage);
  }
}
