# trilhaFrontEnd
 Trilha FrontEnd NTT
</h1>
<h1 align="center">
<img src="http://1.bp.blogspot.com/-hEItJlZTE3I/VirtgFC_k3I/AAAAAAAAKzM/kLj7Laem30A/s1600/5.png">
</h1>

<h2>
#Desafio5.3
</h2>

Item1: Services
A) A respeito de services, responda:
I - Services são objetos que tem a responsabilidade de compartilhar lógica de negócios e organizar
informações e funções com diferentes componentes de uma aplicação.

II - Por que ao separar as funcionalidades relacionadas à visualização de um componente de outros tipos de
processamento como services, você pode tornar suas classes de componentes enxutas e eficientes. Isso traz
uma otimização de processos e otimiza a reutilização de funções.

III - Através da injeção de dependência. Notação - > @Injectable()

IV - Validação de dados, Transporte de dados diretamente do servidor, registro de log.	

V - Com certeza verdadeiro, o módulo é o responsável pela comunicação do componente com o service.

VI - Falso, podem ter várias instâncias em uma service, e isso faz com que a mesma não seja mais singletron.

VII - (Pasta Respostas img --> Item 1 - A- VII) 

B) A respeito de services, responda:
I - Injeção de dependência é um padrão no qual uma classe solicita uma dependência de 
fontes externas em vez de cria-las. São usados em todos os lugares para fornecer novos componentes com os 
serviços ou outras coisas que eles precisam. Componentes consomem serviços; ou seja, você pode injetar 
um serviço em um componente, dando ao componente acesso a essa classe de serviço.

II - Falso, pode ser uma service, um valor, uma string etc.

III - Verdadeiro, primeiramente há uma verificação para saber se já existe uma injeção daquela dependência.


C) HTTP Client:
I - O protocólo Http é o metodo que seta a comunicação entre um navegador e um servidor (web).

II - Existem várias bíbliotecas com API's e formas de comunicação que fazem esta função, entre elas:
Axios - Que faz as requisições através de JSON.

FTP:
Faz o armazenamento de dados e arquivos que podem ser acessados via internet.

SuperAgent:
Utiliza de queryArguments, para fazer as requisições.

Todos esses métodos utilizam de integração do front para o back end.

III - Assim como sugere a documentação oficial do angular:
A capacidade de solicitar objetos de resposta digitados .
Tratamento de erros simplificado .
Recursos de testabilidade .
Interceptação de solicitação e resposta .

IV - Fazemos a importação do HttpClientModule, e depois a injeção de dependência do HttpClient na service
que será utilizado.

V - Verdadeiro, inclusive o HttpClient utiliza os Observables do RxJs e outros operadores.

VI -

GET: Solicita dados no servidor armazena e exibe.
POST: Armazena dados no servidor.
PUT: Pega os dados armazenados pelo método Post, e faz as alteações que forem solicitadas.
DELETE: Apaga do servidor os dados selecionados.

VII - Verdadeiro, o Observable pode fazer isso através de um get de HttpClient.

VIII - As respostam são tratadas em forma de códigos http, são eles:
Respostas de informação (100-199) São meramente respostas informativas.
Respostas de sucesso (200-299) Status de sucesso.
Redirecionamentos (300-399) Status de redirecionamento de página.
Erros do cliente (400-499) Erro na solicitação, o exemplo mais conhecido é o 404NotFound, que
determina a não existência da página solicitada.
Erros do servidor (500-599) Erro no servidor, a solicitação foi correta, porém o backend se 
encontra com alguma irregularidade.

IX - 
200 - OK - Solicitação bem sucedida.
201 - Created - Atualização bem sucediada, é respondida geralmente para uma solicitação PUT.
404 - NotFound - Erro na solicitação do cliente, por exemplo, erro de digitação de um endereço.
500 - Internet Server Error - Geralmente erro no servidor, solicitação bem sucedida, porém,
contendo problemas no back end.

X - (Respostas img --> Item 1 - C- X)

XI - Serve para que sejam passadas informações adicionais, ou solicitações e até mesmo respostas,
HTTP.

XII - Um pattern que tem a função de literalmente interceptar ou até dar a tratativa de requisiçções
HTTP, antes de elas chegarem ao servidor.

XIII - Os famosos "Token", são usadas em solicitações como logar, cadastrar um usuário, e etc.

D) RxJS:
I - É uma biblioteca que auxilia programas assíncronos baseado em eventos usando observables. 
O núcleo observable é composto por 3 satélites Observer, Schedulers, Subjects e alguns operadores baseados
em Arrays etc.

II - São algumas diferenças, entre elas:
Promisses > Seguem o padrão de demanda Eager, são sempre assíncronas, e retornam sempre o mesmo valor.

Observables > Podem ou não ser assíncronas, seguem a demanda LazyPage, podem retornar diversos valores,
um fluxo de valores ou somente um. E pode ser otimizado com outras ferramentas no RxJS.

III - Signfica que é baseado em algum tipo de ação que acontece no fluxo de dados, 
e alteração desses mesmos.		

IV - É o padrão usado pela Observable, que é utilizado para que as informações de comportamento, 
sejam atualizadas para nós. Também chamados, callbacks.

V - É uma função que tem a liberdade de percorrer e vasculhar elementos dentro de um container. Que
por padrão tem elementos que não podem ser separados. O iterator consegue desacoplar eles no seu acesso.

VI - É uma forma de programação em que você utiliza algumas operações como: map, filter, concat, reduce, etc...
em em cálculos, que por sua vez fazem uma saída de dados na operação. Esses são chamados Pipelines. Na programação
funcional evitamos o compartilhamento de estados, dados mutáveis e efeitos colaterais.

VII -
Observable: Representa a ideia de uma coleção que pode invocar valores ou eventos futuros.

Observer: é uma coleção de callbacks que sabem ouvir os valores entregues pelo Observable.

Subscription: Representa a execução de um Observable, é muito util para cancelar a execução.

Operators:são funções puros que permitem um estilo de programação funcional de lidar com coleções com operações como map, filter, concat, reduce, etc.

Subject: É equivalente ao EventEmitter, e o unico canal de multicasting de um valor ou evento para multiplos Observers.

Schedulers: são despachantes para a simultaneidade de controle centralizado, permitindo-nos para coordenar quando computação acontece no exemplo setTimeoutou requestAnimationFrameou outros.

VIII - São eles:
- ajax, 
- bindCallback, 
- bindNodeCallback, 
- defer, 
- empty, 
- from, 
- fromEvent, 
- fromEventPattern, 
- generate, 
- interval, 
- of, 
- range, 
- throwError, 
- timer, 
- iif.

IX - 
{Exemplos da documentação Oficial do RxJS}

- ajax; Faz um Observable para uma requisição Ajax com um objeto de solicitação com URL, cabeçalho, ou 
uma string para uma url. (Respostas img --> Item 1 - D - IX - item1)

- from; Com base em uma estrutura de dados pré estabelecida como um Array, ele pode transfomar o 
objeto da função em Observable, como por exemplo transformar uma Matriz.
(Respostas img --> Item 1 - D - IX - item2)

- fromEvent; A mesma transformação do "from" porém em Eventos, como clicks, por exemplo.
(Respostas img --> Item 1 - D - IX - item3)

- generate; Produz uma sequancia com comportamento Observe, que se comporta em loop. Utilizado em funções
 de condição e iteração. (Respostas img --> Item 1 - D - IX - item4)

- of; Recebe valores em sequencia e os tonrna Observáveis. (Respostas img --> Item 1 - D - IX - item5)

- interval; Emite valores, em uma sequencia de intervalo pré estabelecida. (Respostas img --> Item 1 - D - IX - item6)

- throwError; Cria uma observableque instância um erro e envia para o usuário, parecido com o 
comportamento de logs. (Respostas img --> Item 1 - D - IX - item7)

- timer; Cria uma observable que espera por um período estipulado, ou até mesmo uma data, antes de emitir 0. (Respostas img --> Item 1 - D - IX - item8)

X -
- combineLatest
- concat
- forkJoin
- merge
- partition
- race
- zip

XI -
{Exemplos da documentação Oficial do RxJS}
- concat; Cria um observable que entrega sequencialmente os valores, do primeiro em diante. 
(Respostas img --> Item 1 - D - XI - item1)

- forkJoin; Recebe um array de um observable, e retorna um Observable com uma matriz com a ordem EXATA com a qual foi recebida.
 (Respostas img --> Item 1 - D - XI - item2)

- merge; Cria uma saída em Observable que exibe todos os falores de entrada Observable que foi recebida
de forma simultânea. (Respostas img --> Item 1 - D - XI - item3)

XII -
- buffer
- bufferCount
- bufferTime
- bufferToggle
- bufferWhen
- concatMap
- concatMapTo
- exhaust
- exhaustMap
- expand
- groupBy
- map
- mapTo
- mergeMap
- mergeMapTo
- mergeScan
- pairwise
- partition
- pluck
- scan
- switchScan
- switchMap
- switchMapTo
- window
- windowCount
- windowTime
- windowToggle
- windowWhen

XIII -
{Exemplos da documentação Oficial do RxJS}
- concatMap; Projeta cada valor de origem para um Observable que é mesclado na saida, de maneira serializada, esperando que cada um seja concluido antes de mesclar o proximo
(Respostas img --> Item 1 - D - XIII - item1)

- map; Aplica uma determinada função de projeto a cada valor emitido pela fonte Observable e emite os valores resultantes como um Observable.
 (Respostas img --> Item 1 - D - XIII - item2)

- mapTo; Emite o valor constante fornecido na saída Observable sempre que a fonte emite um valor.
(Respostas img --> Item 1 - D - XIII - item3)

- mergeMap; Projeta cada valor de origem para um Observável que é mesclado na saída.
(Respostas img --> Item 1 - D - XIII - item4)

- mergeMapTo; Projeta cada valor de origem para o mesmo Observable, que é mesclado VÁRIAS vezes na saída.
(Respostas img --> Item 1 - D - XIII - item5)

- switchMap; Projeta cada valor de origem para um Observável que é mesclado na saída Observável, emitindo valores apenas do Observável projetado mais recentemente.
(Respostas img --> Item 1 - D - XIII - item6)

- switchMapTo; Projeta cada valor de origem para o mesmo Observable, que é achatado varias vezes com switchMap na saida.
(Respostas img --> Item 1 - D - XIII - item7)
