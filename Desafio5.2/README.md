# trilhaFrontEnd
 Trilha FrontEnd NTT
</h1>
<h1 align="center">
<img src="http://1.bp.blogspot.com/-hEItJlZTE3I/VirtgFC_k3I/AAAAAAAAKzM/kLj7Laem30A/s1600/5.png">
</h1>

<h2>
#Desafio5.2
</h2>

<h2>Item1: Reutilização de componentes</h2>

A-
I. Um bloco de construção de aplicações angular. Essa classe demarcada com o decorator
@component, suas principais propriedades são "selector", "template" e"styleUrls".

II. Das suas propriedades, "selector", "template" e"styleUrls", o Seletor, define como o
componente será utilizado, o template define as configurações de HTML que serão entregues
na tela, style mostra estilização CSS. 

III. Com este comando sendo chamado no terminal: ng generate component "nome do seu component".

IV. É de extrema importância que nós sempre levemos em conta a otimização de processos, no
desenvolvimento. Reutilizar componente é fundamental nisso, o código fica mais otimizado, 
o fluxo de trabalho fica melhor e aplicação fica melhor desenvolvida.

V. Serve para escolha de um seletor de estilização, CSS. 

VI. Ex1: Um Template é um modelo de arquivo visual responsável por criar um padrão para um determinado 
formato de peça gráfica, neste caso está sendo mostrado como o HTML será exibido na página,
e o caminho do arquivo, que no caso é um caminho externo.
Ex2: Neste exemplo, não está sendo um caminho externo, e sim, a própria mensagem HTML, que
está sendo exibido na tela.

VII.Ex1: Neste exemplo a estilização está sendo puxada de um arquivo externo, css. Desta 
forma ela pode atualizar e definir mudanças onde quer que ela for referenciada.

Ex2: Neste caso é como se houvesse uma estilização "fixa", sendo setada diretamente no 
componente.

<h2>Item2: Rotas</h2>
I. ng new routing-app --routing --defaults 
Neste caso, o nome do app é routing-app

II. ng generate module [nomeDoModulo] --routing

III. Ele faz um roteamento no código através de array. Os elementos são referenciados,
via URL.

IV. isactive (que em inglês é "é ativo")é um booleano, mostra se a Rota está ativa.

V. Ele configura um roteador em um módulo separado de nível superior, que tem a função
de rotear. Ele é importado pelo root AppModule.

VI. Mostra a rota padrão da aplicação, é uma diretiva do Router. Ele faz o direcionamento
das rotas por componentes, de forma correta.

VII. <button (click)="Login('/login')"></button>

VIII. <a routerLink="/login">Login</a><br>

IX. É um carregamento fracionado, dessa forma só é carregado o que está sendo mostrado na
tela. Isso contribui para a otimização da página.

Exemplo:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./user/login.module').then(m => m.LoginModule) },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

X. No Eager Load, diferente do Lazy Load, todos os módulos são carregados ao inicio da
aplicação. 

Exemplo:
import { CadastroInicioComponent } from './cadastro-inicio/cadastro-inicio';
import { ParlamentoComponent } from './parlamento/parlamento.component' ;
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{path: '', redirectTo: 'cadastro-inicio', pathMatch: 'full'},
	{path: 'cadastro', component: CadastroComponent},
	{path: 'parlamento', component: ParlamentoComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }


<h2>Item3: Pipes</h2>
I. São funções, que recebem um valor de entrada e retorna um valor transformado. Serve para
transformar strings, valores monetários, datas e outros dados para exibição.

II. São eles: PercentPipe, UpperCasePipe, CurrencyPipe, LowerCasePipe, DecimalPipe, DataPipe.

III.
PercentPipe = Transforma o número em formato de porcentagem.
UpperCasePipe = Altera o case da formatação, transformando o texto em letras maiúsculas.
CurrencyPipe = Transforma um valor recebido (número) em moeda (string), de acordo com as regras estabelecidas.
LowerCasePipe = Altera o case da formatação, transformando o texto em letras minúsculas.
DecimalPipe = Formata o número recebido em formato de números de casas decimais, estabelecidas.
DataPipe = Formata a data, de acordo com as regras estabelecidas.

IV. São pipes customizadas, que servem para formatas informações personalizadas, de acordo com a regra estabelecida.