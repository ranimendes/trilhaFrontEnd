import { AbstractControl, FormControl } from '@angular/forms'
import { ValidaImovel } from './valida-imovel.module'

describe('ValidaImovel Module ', () => {
  it('Valida Entrada', () => {
    const mockCampo: AbstractControl = new FormControl(0)
    let result = ValidaImovel.valorDaEntrada(mockCampo);
    expect(result).toEqual(null)
  })


})
