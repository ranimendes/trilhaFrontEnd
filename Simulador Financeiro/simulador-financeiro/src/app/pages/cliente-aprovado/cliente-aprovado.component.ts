import { Subscription } from 'rxjs';
import { FinaciamentoService } from 'src/app/shared/financiamento.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cliente-aprovado',
  templateUrl: './cliente-aprovado.component.html',
  styleUrls: ['./cliente-aprovado.component.css']
})
export class ClienteAprovadoComponent implements OnInit {

  msgParcela!: string;
  msgValor!: string;
  subParcela!: Subscription;
  subValor!: Subscription;


  constructor(private service: FinaciamentoService ) { }

  ngOnInit(): void {
    this.subParcela =
    this.service.currentParcela.subscribe(message => this.msgParcela = message)
    this.subValor =
    this.service.currentValor.subscribe(message => this.msgValor = message)
   }

   ngOnDestroy() {
     this.subParcela.unsubscribe();
   }

}
