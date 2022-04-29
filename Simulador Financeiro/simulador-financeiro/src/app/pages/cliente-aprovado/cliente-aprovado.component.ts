import { Router } from '@angular/router';
import { Component, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { BasicInfoService } from 'src/app/shared/Service/basic-info.service';
import { Imovel } from '../form-imovel/shared/imovel.model';
import { ImovelService } from 'src/app/pages/form-imovel/imovel.service';

@Component({
  selector: 'app-cliente-aprovado',
  templateUrl: './cliente-aprovado.component.html',
  styleUrls: ['./cliente-aprovado.component.css']
})
export class ClienteAprovadoComponent extends BasicInfoService implements OnInit {

  imovel!: Imovel;
  parcelaInicial!: number;
  valorTotalAprovado!: number;

  constructor(
    injector: Injector,
    location: Location,
    router: Router,
    public imovelService: ImovelService
    ) {
    super(injector, location, router)
   }

  ngOnInit(): void {
    this.imovelService.getImovel(this.imovel);
    this.parcelaInicial = this.imovel.parcelaInicial!;
    this.valorTotalAprovado = this.imovel.valorAprovado!;
  }

  imprimeTitulo():string {
    return 'cliente-aprovado'
  }

}
