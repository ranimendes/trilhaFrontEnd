import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ImovelStorageService } from '../form-imovel/shared/storage.service';
import { Cliente } from '../form-client/shared/cliente.model';
import { Imovel } from '../form-imovel/shared/imovel.model';
import { ClientStorageService } from '../form-client/shared/client-storage.service';

@Component({
  selector: 'app-cliente-aprovado',
  templateUrl: './cliente-aprovado.component.html',
  styleUrls: ['./cliente-aprovado.component.css'],
})
export class ClienteAprovadoComponent implements OnInit {
  cliente!: Cliente;
  imovel!: Imovel;
  parcelaInicial!: number;
  valorAprovado!: number;

  constructor(
    private clientStorage: ClientStorageService,
    private imovelStorage: ImovelStorageService
  ) {}

  ngOnInit(): void {

    this.cliente = this.clientStorage.getClient();
    this.imovel = this.imovelStorage.getImovel();
    console.log(this.imovel);
    this.parcelaInicial = this.imovel.parcelaInicial!;
    this.valorAprovado = this.imovel.valorAprovado!;
  }
}
