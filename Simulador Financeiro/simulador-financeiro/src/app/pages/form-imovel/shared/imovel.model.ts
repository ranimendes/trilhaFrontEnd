export class Imovel {
  constructor(
    public tipo?: string,
    public renda?: number,
    public valor?: number,
    public entrada?: number,
    public parcelas?: number,
    public valorAprovado?: number,
    public parcelaInicial?: number
    
  ) {
    this.tipo = tipo;
    this.renda = renda;
    this.valor = valor;
    this.entrada = entrada;
    this.parcelas = parcelas;
    this.valorAprovado = valorAprovado;
    this.parcelaInicial = parcelaInicial;
  }
}
