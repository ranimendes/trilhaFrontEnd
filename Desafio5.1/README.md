# trilhaFrontEnd
 Trilha FrontEnd NTT
</h1>
<h1 align="center">
<img src="http://1.bp.blogspot.com/-hEItJlZTE3I/VirtgFC_k3I/AAAAAAAAKzM/kLj7Laem30A/s1600/5.png">
</h1>

<h2>
#Desafio5.1
</h2>


A- Basicamente SPA é uma página onde o carregamento de conteúdo depende da demanda do cliente, então são carregados os arquivos que precisam no momento. Já o MPA é uma forma antiga que carrega todo o conteúdo da página, tornando a navegação mais lenta e pesada em dados.

B- As limitações técnológicas da época, fazia com que as páginas fossem, um amontuado de informações e anúncios de outras empresas, quase que um jornal de "classificados virtual".

C- Web 1.0 dá o ponta pé inicial, ao  WWW (World Wide Web), com uma página fixa, não possibilitando a interação com o usuário.
    Web 2.0 chega em meados de 2004, com um conceito bilateral, possibilitando a interação e compartilhamento com o usuário.
    Web 3.0 mais conhecida como "Web Semântica", aprimora a interação entre os usuários, além de intensificar as funcionalidades, com a chegada do algoritimo, mecanismos de busca inteligente.

D-

I. É uma plataforma, framework de aplicações web baseada em TypeScript. Vale ressaltar que está framework foi desenvolvida pela equipe do Google!

II. Com o Angular, é possivel criar SPA em sua raiz de modo que a página não precise ser recarregada de forma desnecessária, e sim de acordo com a navegação e interação com o usuário.

III. Sem dúvidas, os componentes, módulos e para que eles sejam criados usamos as diretivas, que são marcadores em um elemento DOM. Como "NgIf", "NgFor" etc.

IV. É o arquivo de inicialização do angular, responsável por fazer um agrupamento de arquivos HTML, Css, JavaScript, TypeScript nós o chamamos na aplicação, juntamente com o Node, através do "npm install -g angular-cli".

V. É o local que fica a workspace de configuração do angular, possui diversas propriedades. 

VI. Angular Router, Angular Forms, Angular HttpClient, Angular Animations, Angular PWA, Angular Schematics.

VII. É o workspace de configuração da sua aplicação, lá determinamos e configuramos todas as dependências.

VIII. É a área de configuração do ambiente de desenvolvimento do projeto. Diferente do environments.prod.ts que é a área de configuração do ambiente de produção do projeto.

E- 

I. Com interpolação de texto é possivel incorporar valores de string em seus modelos HTML. Com isso usar recursos de forma dinamica, como exibir data e hora, usando
interpolação.

II. Como dito acima, a interpolação dinamiza a interação do desenvolvedor com a aplicação, podendo usar de strings, para incorporar informações. Como nome do usuário,
data, hora etc.

III. exercício

F-

I. Property Binding, no Angular é responsavel por setar valores para as propriedades de 
elementos ou diretivas HTML. Essa funcionalidade permite por exemplo, tornar funcional
um botão de alternância, compartilhar valores entre os componentes e definir caminhos, 
de forma programada.

II. Movendo uma valor da propriedade componente para uma propriedade elemento de destino, 
através do [], colhetes. Eles identificam a propriedade e a direcionam.

III.
<button type="button" [disabled]="isUnchanged">Disabled Button</button>, neste exemplo u
um botão é desabilitado quando o componente diz isUnchanged.

IV. Eventos que permitem efetuarmos uma ação do usuário através de uma ação, que pode
ser um click, movimento de mouse, etc.

V. <button (click)="onSave()">Save</button>, neste exemplo o nome do evento é click, e
o mesmo chama o método onSave, quando o usuário clicka.

VI.[(ngModel)] Nada mais é do que uma vinclução de duas direções. Ele entende os eventos,
e atualiza dos valores ao mesmo tempo. 

VII. Podemos usar atualizando um cadastro por exemplo, ou em um formulário.

G- 

I. Com as diretivas istruimos o comportamento do elemento.

II. Diretivas de atributo e diretivas de componentes.

III. ngIF = Funciona como if, uma ação condicional.
ngSwitch = Muda o comportamento das suas diretivas complementares.
ngModule = Um FormControl que anexa um elemento de controle de formulário a um modelo de
domínio.
ngFor = Um Array usando um loop for.
ngClass = Define uma classe dinamica com o DOM de um elemento.
ngStyle = Define estilização do elemento e seu comportamento.

H-

I. Ambas podem ser feitas por um FormGroup, uma você manipula e envia um formulário atraves 
do HTML, e em outra a configuração e manipulação é feita no próprio componente.

II. É mais otimizado para manutenções e aprimoramentos.

III. É necessário importar o módulo ReactiveFormsModule, usando a linha abaixo no 
app.module.ts: import { ReactiveFormsModule } from '@angular/forms';

IV. FormGroup, FormControl, FormArray.

V. Primeiramente é preciso registrar o ReactiveFormsModule, ele vai passar as diretivas
necessárias, depois chamamos um FormControl, ele manipula um único controle de formas
reativas.

VI. Cada ação depende exclusivamente da sua solicitação, e independe a forma com a qual
a página é renderizada. 

VII. O usuário faz uma solicitação, o formulário gera um event recebendo o valor mais 
recente, o acessor de controle atualiza o novo valor parao FormControl e o mesmo atualiza,
o valor através do trabalho das Observables.

VIII. A validação é uma grande correção e observação dos dados enviados pelo cliente, 
observando se todos campos foram preenchidos, e se estão corretos, tudo para garantir
a integridade e segurança dos dados. E para evitar duplicidade também.
