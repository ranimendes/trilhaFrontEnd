# trilhaFrontEnd
 Trilha FrontEnd NTT
</h1>
<h1 align="center">
<img src="https://i.imgur.com/AUNcRd5.jpg">
</h1>

<h2>
#Desafio9
</h2>

A-Estipular as configurações base no projeto, tais como dependências e scripts. Ele passa diretriz ao projeto
inteiro.

B-O Angular.json tem a responsabilidade de definir configurações que vem do padrão Angular CLI, ele passa valores
da pasta root na workspace, e direciona arquivos estáticos e etc, diretamente do node_modules.

C-Uma diretiva Angular CLI, mais especificamente do Router, com ela podemos direcionar qual componente vai ser carregado.

D- 1 declaração - Eager-Load, ele carrega todos os componentes da aplicação logo na inicialização. Seus módulos também.
   2 declaração - Lazy-Load, já nessse formato, cada módulo e componente é carregado com base na demanda do usuário.
Isso otimiza muito a aplicação, é um padrão mais utilizado ultimamente.

E- Importância enorme, com base na componentização e otimização o código fica mais limpo, leve e fácil de receber 
manutenção.

F-category-form e entry-form.

G-Ele é um Input, responsável por criar uma lista dos items que serão exibidos no BreadCrumbItem. Fazendo a
comunicação entre component pai, para filho.

H-Faz a comunicação inversa, de filho para pai, com saída de dados. 

I-
core: É um módulo com funções destianos ao funcionamento da aplicação;

pages: É um módulo com funções responsáveis por tudo que é renderizado na tela do usuário; 

shared: É um módulo com funções e diretivas que são responsáveis pelo compartilhamento de dados como pipes, e diretivas e funções.

J- É um banco de dados, que simula um BackEnd no qual recebe requisições http. Quando a página é atualizada ele
perde os dados, por que só tem fim de teste e simulações.

K-
Métodos:
clearValidators(): Limpa a lista de validadores.
setValue(): Seta um valor do controle;
getError(): Informa dados de erros ao controle;
get(): Recebe um valor de caminho ou controle.
setError(): Seta os possíveis erros que podem ser pegos no getError.

Propriedades:
touched: Um elemento booleano que define como true quando um objeto ou elemento é tocado.
disabled: Desabilita o controle.
invalid: Define um controle como um inválido.
errors: Objeto que guarda os erros e falhas na aplicação.
value: Recebe os valores do formulário.

L- Faz uma verficação no If, consultando se a navegação está em EDIT, ele utiliza um Observable paramMap,
aplica um pipe, e utiliza um switchMap. Através do ID, ele aplica os valores no formulário do LancamentoForm,
com um bind. Caso não seja executado da forma correta ele retorna um alert, "Ocorreu um erro no servidor, tenta mais tarde".

M-Herança, o componente "EntryFormComponent" está herdando os métodos do "BaseResourceFormComponent".

N-Polimorfismo, o método loadCategories(); dentro do ngOnInit() sobrescreve os métodos da classe pai.

O-Injeção de dependencia, a classe EntryService sendo declarada em providers, fica disponivel em toda aplicação,
é uma forma de componentização.