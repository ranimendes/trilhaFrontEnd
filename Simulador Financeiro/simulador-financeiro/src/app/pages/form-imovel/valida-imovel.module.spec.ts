import { AbstractControl, FormControl } from '@angular/forms'
import { ValidaImovel } from './valida-imovel.module'

describe('ValidaImovel Module ', () => {
  it('Valida Valor Entrada', () => {
    const mockCampo: AbstractControl = new FormControl(250)
    let result = ValidaImovel.valorDaEntrada(mockCampo);
    expect(result).toEqual(null)
  })

  it('Valida Valor Entrada Null', () => {
    const mockCampo: AbstractControl = new FormControl(0)
    let result = ValidaImovel.valorDaEntrada(mockCampo);
    expect(result).toEqual(null)
  })

})
