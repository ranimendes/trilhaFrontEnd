import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidaImovel {
  static valorDaEntrada(campo: AbstractControl) {
    const valor = campo.parent?.get('valor')?.value?.replace(',', '.');
    const entrada = campo.parent?.get('entrada')?.value?.replace(',', '.');

    if (entrada < valor * 0.2) {
      return { entradaValida: true };
    }
      return null;

  }

  static numeroParcelas(campo: AbstractControl) {
    const parcela: Number = campo.parent?.get('parcelas')?.value;

    if (parcela <= 360) {
      return null;
    } else {
      return { parcelaValida: true };
    }
  }
}
