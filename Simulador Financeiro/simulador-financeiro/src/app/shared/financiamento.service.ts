import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinaciamentoService {
  constructor(private router: Router) {}

  private msgValor = new BehaviorSubject('');
  private msgParcela = new BehaviorSubject('');
  currentParcela = this.msgParcela.asObservable();
  currentValor = this.msgValor.asObservable();

  public jurosComposto(form: any) {
    let renda = form.renda.replace(',', '.');
    let valor: number =
      form.valor.replace(',', '.') - form.entrada.replace(',', '.');
    let juros = 0.0067;
    let periodo = form.parcelas;
    let valorAcumulado = valor * Math.pow(1 + juros, periodo);
    let valorParcela = valorAcumulado / periodo;

    this.msgParcela.next(valorParcela.toFixed(2).replace('.', ','));
    this.msgValor.next(valor.toFixed(2).replace('.', ','));

    if (valorParcela <= renda * 0.3) {
      this.router.navigate(['/cliente-aprovado']);
    } else {
      this.router.navigate(['/cliente-reprovado']);
    }
  }
}
