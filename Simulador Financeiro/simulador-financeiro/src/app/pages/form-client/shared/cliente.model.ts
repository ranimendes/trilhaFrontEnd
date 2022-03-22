export class Cliente {
  constructor(
    public id?: number,
    public nome?: string,
    public trabalho?: string,
    public cpf?: string,
    public email?: string,
    public dataDeNascimento?: string,
    public cep?: string,
    public celular?: string
  ) {
    this.id = id;
    this.nome = nome;
    this.trabalho = trabalho;
    this.cpf = cpf;
    this.email = email;
    this.dataDeNascimento = dataDeNascimento;
    this.cep = cep;
    this.celular = celular;
  }
}
