import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: '',
})
export class ComponentePaiComponent {
  @Input() numeroComponent: number = 0;

  isPar(valor: number): string {
    return valor % 2 == 0 ? 'par' : 'ímpar';
  }

  isPrime(n: number) {
    for (var i = 2; i < n; i++) if (n % i === 0) return 'não é um número primo';
    return n > 1 ? 'é um número primo!' : 'não é um número primo!';
  }
}
