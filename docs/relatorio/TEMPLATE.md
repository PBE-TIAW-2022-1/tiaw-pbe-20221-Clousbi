# Informações do Projeto
`TÍTULO DO PROJETO`  

Gestão de Rotinas

`CURSO` 

Sistemas de Informação

## Participantes

* Bianca Marques Teixeira 
* Caio Machado Taussig 
* Carlos Alberto Diniz Junior 
* Diogo Henrique Afonso Silva 
* Robert William Batista dos Santos Silva 
* Vinicius Resende do Carmo 

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
O trabalho a seguir tem como foco principal, pegar um problema em comum na sociedade e tentar resolve-lo através de uma aplicação web. No dicionário, rotina significa "a sequência de procedimentos, o hábito habitual; a maneira de realizar algo, sempre da mesma maneira; isso é feito diariamente". Com isso, entende-se que os procedimentos de trabalho são uma série de atividades profissionais que realizamos diariamente. Não é apenas a sequência que compõe as atividades diárias, é a maneira como se faz. Uma rotina de trabalho bem definida evita o acúmulo de tarefas, atrasos no cumprimento de prazos e outras frustrações que podem surgir quando não há um cronograma a seguir. No entanto, procedimentos de trabalho muito rígidos podem deixar os funcionários insatisfeitos porque eles não têm flexibilidade para fazer ajustes em circunstâncias imprevistas ou quando necessário.
Dessa forma, a organização com um cronograma, um lembrete simples ou uma anotação de fácil acesso são formas de ativar a memoria do trabalhador ou estudante para fazer uma determinada tarefa, não atrasando ou esquecendo. Esses métodos, mesmo que simples, fazem toda diferença no aspecto de produtividade, principalmente em uma empresa onde existem vários funcionários que se conectam entre si e dependem da produção do outro. Com esse problema em mente, a PRSystems quer desenvolver um método que seja simples, de fácil acesso e estimulante para que essa produtividade seja adquirida.

## Problema
Atualmente, muitas pessoas possuem uma rotina bastante exaustiva, com muitos compromissos 
e bastante regrada, pensando nisso, nós, da PRSystems, resolvemos pegar esse problema em 
comum na sociedade para tentar deliberá-lo por uma aplicação prática e intuitiva. Muitas das 
vezes, com várias tarefas para fazer em simultâneo, o indivíduo não se sabe ao certo por onde, 
como, quando começar e tem uma “procrastinação” por não se sentir na segurança/estimulo de 
fazer uma determinada tarefa. Assim, com o desenvolvimento do gestor de rotinas, impulsiona 
ao usuário ter um momento de organização diária consequentemente a uma vida produtiva.

# Matriz certezas, suposições e dúvidas
> Certezas
* Uso do HTML, CSS e Java Script 
> Dúvidas
* Como vamos fazer em HTML
* Prazo suficiente para o aplicativo
*  Escolha das pessoas para entrevista 
> Suposições
* Site com mobile (protótipo)

# Brainstorming
* Ideia 1: Calendário com bloco de notas;
* Ideia 2: Por meio do site WEB;
* Ideia 3: Com lembretes;
* Ideia 4: Lembretes com alarme;
* Ideia 5: Cronogramas;
* Ideia 6: Sendo mobile.

## Objetivos

O objetivo do projeto é basicamente criar uma aplicação “web” que, através de calendários 
interativos,  bloco  de  notas,  lembretes  e  muitas  outras  funções  rotineiras,  vai  conseguir 
solucionar problemas na organização da rotina das pessoas que não possuem muito tempo e 
disposição para fazer o mesmo manualmente.

## Justificativa

A aplicação vai ser criada para poder melhorar o desenvolvimento da sociedade em geral, 
automatizando a organização do seu dia a dia, auxiliando o usuário a gerir sua rotina com dicas 
e informações importantes. Simplificando, uma rotina é tudo feito em uma base regular. Por 
sua vez, o ato de gerenciar envolve planejar e organizar fluxos de trabalho. Juntando essas duas 
definições, a gerenciamento do dia-a-dia inclui o processo de planejamento e organização das 
atividades que uma empresa costuma realizar — operações.
O primeiro impacto do gerenciamento diário é reduzir o desperdício de tempo e recursos, 
projetando metas e implementando etapas. Como resultado, pode-se verificar um aumento na 
produtividade da empresa. Uma rotina bem estruturada permite que os gestores tenham uma 
visão inteira do processo produtivo, de forma que as metas impostas estejam mais alinhadas 
com a real situação da organização. Tais objetivos tendem a tornar as previsões de resultados 
mais precisas.
          
## Público-Alvo

Como dito nos tópicos anteriores, as empresas necessitam expressivamente de um cronograma 
que atenda a produtividade. O nosso público-alvo serão pessoas entre 14 e 45 anos que possuem 
uma rotina pesada, sem muito tempo livre, e com bastantes responsabilidades durante todo o 
mês.  Além  disso,  essa  faixa  etária  possui  a  maior  porcentagem  de  PEA  (População 
Economicamente Ativa), as pessoas que estão entrando ou já estão no mercado de trabalho, 
sendo assim, estão no auge de suas vidas, com estudo, trabalho, vida pessoal, saúde, criação de 
famílias e compra de bens maiores como casa, carro, ou seja, uma rotina com várias decisões e 
ações que para um só indivíduo é muito difícil gerir.

# Especificações do Projeto

Nossa empresa irá utilizar os meios em HTML5 e CSS3 para a realização do site. Estamos avaliando em usar JavaScript e a prática aleatória nos processos de dicas para o usuário. Nosso projeto tem base em armazenar as informações na qual ele irá colocar em nosso site para organizar sua rotina.

## Personas e Mapas de Empatia

Com a persquisa que fizemos no mapa de empatia, a nossa persona teria idade entre 20 a 25 anos, do sexo feminino, com o conhecimento do uso de aplicativos de rotina, que estuda e trabalha. Nosso foco são essas características com algumas alterações em relação a roupas, corpo e gostos.

> **Mapa de Empatia**

> Qual (s) funcionalidade (s) você acha importante em um aplicativo de rotinas?
* Alarme para compromisso.
* Lembrar dos compromissos do futuro.
* Objetividade e intuitivo
* Agenda de tarefas e notificações.
* Lembrete de algo importante
* Objetividade, marcadores para dar ok,
* Rotinas
* Sistema de metas e desenvolvimento em constância
* Cronometragem de tarefas, por exemplo, para demarcar o tempo de estudo/trabalho e 
tempo de descanso
* Organizar o dia a dia
* Despertador e temporizador
* Não uso, por isso não tenho conhecimento

> Como você se vê no dia-a-dia usando-o (motivos)?

* Nunca precisei de usar.
* Usar para consultas médicas.
* Para organizar tarefas
* Muitas vezes deixo as coisas importantes para a última hora ele poderia me ajudar a 
consertar esse meu defeito.
* Gerenciando minha rotina e otimizando tempo
* Para afazeres
* Sem tempo
* Regrar minhas atividades no dia a dia
* Limpar a casa e ao mesmo tempo estudar é um pouco cansativo, por isso geralmente 
trabalho cronometrando meu tempo fazendo essas tarefas para então reveza-las
* Seria corrido então deveria ser prático
* Não vejokkkkk

> Quais características (temas, cores, layout) tornariam o app mais atraente para você?

* Cores frias.
* Tema geométricos, Cores claras.
* Características leves
* Layout intuitivo, sem muito texto e cores pastéis (no mais uma palheta de tons 
* Pastéis, puxado para tons mais frios)
* Talvez cores pastéis
* Modo Noturno 
* Cor laranja deixa calmo

> O que acha que deve melhorar com aplicativos já criados?

* Às vezes diminuir a quantidade de funções seria bom e então focar bem na aplicação de 
uma específica função
* NAO TER ANÚNCIOS.
* A praticidade
* Nunca usei esse aplicativo.
* Nunca usei.
* Não sei
* Gratuidade na experiência completa
* Tudo
* A notificação só sair depois que for concluída
* A praticidade.
* Objetividade e facilidade em aprender a usa-lo
* Objetividade e facilidade para criar novas tarefas

> Vantagens de ter esse aplicativo/ experiências positivas que tiveram com algum aplicativo 
já criado.

* Adequado para gestar tempo, especialmente quando se é uma pessoa que se distrai fácil
* Organizar a vida de alguém
* Conseguir organizar uma rotina e fazer tudo que é necessário do dia a dia
* Para ajudar a não faltar nos compromissos.
* Ajuda a se organizar.
* Nunca usei
* Glorify (aplicativo de devocionais bíblicos com metas diárias e estágios e bônus são 
liberados de acordo com o que você vai avançando durante o período de devocional). 
* Me ajuda a manter constância na leitura diária.
* Se a pessoa não tem disciplina, não adianta um app de rotina! Disciplina é tudo nessa 
vida! 
* Rotina mais produtiva
* Controlar a minha rotina desorganizada para sobrar um tempinho só pra eu descansar.
* Modo noturno e praticidade
* Praticidade no dia a dia

> **Exemplo de Persona**
>DADOS
* Nome: Tina.
* Idade: 20-25 anos.
* Pesonalidade: Criativa, ambiciosa e carismática.
* Objetos: Fone de ouvido, livro e bola de vôlei.
* Motivação: Ela quer ser um exemplo para as pessoas para que o mundo seja mais proativo e organizado.
* Frustações: Não conseguir se organizar na faculdade e desapontar as pessoas que acreditam nela.
* Hobbies, história: Estudar nutrição, escutar música, jogar videogame e jogar vôlei.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/PERSONA%201.png)

>DADOS
* Nome: Roni. 
* Idade: 30-37 anos.
* Ocupação: Formado em engenharia mecânica e trabalha em uma fábrica de automóveis.
* Pesonalidade: Sistemático, perfeccionista e dedicado.
* Objetos: Maleta, notebook e plantas.
* Motivação: Crescer profissionalmente e ter uma rotina de qualidade no quesito de otimização de tempo.
* Frustações: Medo de falhar e decepcionar seus superiores.
* Hobbies, história: Meditação, caminhada, pesca e plantar.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/PERSONA%202.png)

>DADOS
* Nome: Rory
* Idade: 25-30 anos
* Ocupação: Recém formada em Artes visuais e trabalha em uma galeria.
* Pesonalidade: Brincalhona, criativa e perfeccionista.
* Objetos: Quadro, tinta, tarô e cristais.
* Motivação: Mostrar suas artes para expressar seu sentimento para o mundo.
* Frustações: Medo de insetos e do escuro.
* Hobbies, história: Leitura de tarô, pintura, escultura, escutar música, ir em museus e galerias.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/PERSONA%203.png)



## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Estudante do ENEM | Uma rotina focada em estudos para faculdade | dedicar e montar um ambiente de estudos corretamente. |
|Pessoa que vai na academia | Aprender a dividir meu treino corretamente | Fazer o "projetinho verão" mais top possível |
|Trabalho em uma empresa grande | Uma rotina que seja prdutiva | satisfação pessoal entre trabalho e lazer |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais
A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.


|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Receber informações do usuário | ALTA | 
|RF-002| Planilhas com atividades e lembretes referentes às necessidades dos usuários   | ALTA |
|RF-003|Sistemas de alarmes (referente aos lembretes)   | MÉDIA |
|RF-004| Bloco de notas (caso haja necessidade)  | MÉDIA |
|RF-005| Dicas para o usuário (ex.: rotina de estudo, dica: como ajustar/montar um local de estudo produtivo)| BAIXA |


### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.


|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança de dados   | ALTA | 
|RNF-002| Armazenamento offline (caso Mobile) |  BAIXA | 
|RNF-001| Acessibilidades  | MÉDIA | 


## Restrições
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.


|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Financeiro (se não fosse fictício) |
|02| Tempo disponibilizado    |
|03| Uso da aleatoriedade no site    |

# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

## User Flow

O diagrama apresentado na Figura X mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o Wireframe interativo, acesse o [AMBIENTE INTERATIVO](https://www.figma.com/proto/owfF2t9p0Sc4RZsWc4TUpz/Untitled?node-id=16%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A2&show-proto-sidebar=1).
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/FLUXO%20DO%20USUARIO.png)

## Wireframes
Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura X. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. São eles:
* Cabeçalho - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
* Conteúdo - apresenta o conteúdo da tela em questão;
* Barra lateral - apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo.



* Figura 1 - Login
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/LOGIN.png)
* Figura 2 - Home
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/HOME.png)
* Figura 3 - Informações do usuário
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/PESSOAL.png)
* Figura 4 - Aba exercícios
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/EXERCICIOS.png)
* Figura 5 - Aba estudos
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/ESTUDOS.png)
* Figura 6 - Aba agenda
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/AGENDA.png)


# Metodologia

A metodologia contempla as definições de ferramental utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Kanban estruturado com as seguintes listas: 
>
*	Para fazer: Tudo aquilo que precisa ser executado para o projeto ser concluído;

*	Planejar: Área onde se separa como irá ser feito cada tarefa, quem vai fazer, que dia, como. A maioria dos planejamentos são feitos por reuniões semanais via Discord;

*	Executar: Depois que cada um tem sua tarefa designada, é separado em “fazendo” e “feito” e a pessoa responsável por aquela tarefa.

*	Revisão: Com a tarefa feita, o responsável dela revisa para garantir que não tenha erros ou caso outro integrante queira acrescentar algo, é feito tudo na revisão;

*	Completo: Após a revisão, é concluído as tarefas designadas, e com essa área expondo os que já foram feitos, serve como lembrete de tudo que já foi feito e revisado.

> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/KANBAN.png)


## Divisão de Papéis

*	Bianca M. Teixeira (Designer)
*	Caio M. Taussig (Desenvolvedor front-end)
*	Carlos A. Diniz Junior (Desenvolvedor front-end)
*	Diogo H. Afonso (Desenvolvedor front-end)
*	Robert W. Batista de Souza (Desenvolvedor front-end)
*	Vinicius R. Cardoso (Desenvolvedor front-end)


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | GitHub | https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/DESIGNTHINKING.md | 
|Repositório de código | GitHub | https://github.com/Clousbi/ProjetoRotina | 
|Hospedagem do site | Netlify | https://lively-hummingbird-dc8540.netlify.app/ | 
|Protótipo Interativo 1 | Figma | https://www.figma.com/proto/owfF2t9p0Sc4RZsWc4TUpz/Untitled?node-id=16%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A2&show-proto-sidebar=1 | 
|Protótipo Interativo 2 | Figma | https://www.figma.com/proto/YAgKSDlkGNv2LQq4LYepvH/Prototyping-in-Figma?node-id=0%3A78&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2 | 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com/Clousbi/ProjetoRotina) foi utilizado para hospedagem do repositório `ProjetoRotina`. Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Feature Branch Workflow, mostrado na Figura a seguir.

> **Exemplo - GitHub Feature Branch Workflow**:
>![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/FLUXO%20DO%20CODIGO.png)

*	`Laranja` - .html
*	`Azul` - .css
*	`Amarelo` - .js

O fluxo está dividido por ‘commits’, onde cada faixa linear representa uma modificação feita em um determinado dia.
![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/FLUXO%20DO%20CODIGO%202.png)
As setas representando a integração dos códigos com outros. Por exemplo, um commit de **js** relacionado ao commit de **html**.

> Quanto à gerência de issues, o projeto ainda não adotou esses métodos.

# Projeto da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando da Arquitetura da Solução, as estruturas de dados e as telas já implementadas.

## Tecnologias Utilizadas

* Linguagens utilizadas: HTML, JavaScript, CSS;
* Aplicativos: Discord, Word, Canvas, Notion;
* FrameWorks: Bootstrap e JQuery;
* Biblioteca: JQuery;
* IDEs de desenvolvimento: Visual Studio Code;
* Ferramentas: Kanban.

## Arquitetura da solução

Os componentes que fazem parte da solução são apresentados na Figura que se segue
> ![Exemplo de Arquitetura](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/DIAGRAMA.png)
A solução implementada conta com os seguintes módulos: 
* Navegador - Interface básica do sistema 
* Páginas Web - Conjunto de arquivos HTML, CSS, JSON e imagens que implementam as funcionalidades do sistema. 
* Local Storage - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
* Conta - Usuário logado ao sistema. 
* Funcionalidades – Lembretes, coisas relacionadas apenas ao usuário, anotações, etc.
* Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador.

## Hospedagem
O site utiliza a plataforma do Netlify como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 

[Site](https://lively-hummingbird-dc8540.netlify.app/)

A publicação do site no Netlify é feita por meio de uma submissão do projeto (push) via Git para o repositório remoto que se encontra no endereço: 

[GitHub](https://github.com/Clousbi/templatepadrao)


# Template do Site
O padrão de layout a ser utilizado pelo site tem correspondência ao projeto de Interface elaborado anteriormente, conforme Figura a seguir. Na parte azul, corresponde a área do “<nav>” junto com a logo. Na parte amarela é o “<main>” onde a maioria dos templates são divididas em duas colunas. Por último, na parte laranja fica o “<footer>”, com as informações da empresa e o contato.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TEMPLATE.png)

O template criado está disponível no site <https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/tree/master/codigo>  e é composto pelos seguintes principais layouts: 
* Home;
* Modal de login;
* Tela de estudos.

A responsividade segue o padrão do Bootstrap 4.1.1.

* Home
Área que abrange todas as visualizações iniciais do site. 
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/HOME%202.png)
* Login
Área que o usuário realiza o login para ter acesso ao site.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/LOGIN%202.png)
* Tela de Estudos
Área com funcionalidade de organizar os estudos do usuário.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/ESTUDOS%202.png)


# Avaliação da Aplicação

O processo de realização dos testes da solução desenvolvida está documentado na seção que se segue e traz os planos de testes de software e de usabilidade, na sequência, o registro dos testes realizados.

## Plano de Testes
### Software
### Usabilidade
O planejamento dos testes de usabilidade a serem realizados com usuários são descritos na Tabela a seguir.
>Detalhes do público envolvido nos testes

* Idade:

 Nós pensamos em atingir pessoas de 15 a 45 anos, pois estas estão mais economicamente ativas que as outras de acordo com a PEA(IBGE). Isso consequentemente faz com que elas estejam em um trabalho ou ocupação, sendo necessário uma rotina bem organizada para que se deem bem com o dia a dia sem estresse.

* Sexo:

 Sobre o sexo nosso foco é atender os dois polos: Masculino e Feminino.

* Formação educacional:

 Não é obrigatória uma formação educacional, porque com o nosso projeto de interface simples, qualquer pessoa que precise de uma rotina bem organizada além de outros benefícios, poderá usufruir da aplicação Rotineira sem dificuldades.

* Localização:

 De acordo com uma reportagem do VivaBem UOL as pessoas da grande cidade sofrem muito estresse por causa do trânsito lento e poluição do ar, portanto, é de se esperar que o nosso foco de ajuda é para essas pessoas, para tentar amenizar um possível estresse e falta de organização. Contudo, pessoas de zona rural também podem usufruir da Rotineira, pois ela foi feita para que todos consigam utilizar da melhor maneira possível de forma 100% gratuita.

>Roteiro detalhado das tarefas que foram desempenhadas pelos usuários

Primeiramente o usuário deve entrar na página principal onde ele poderá escolher duas opções: "Login" onde ele deve entrar no home da rotineira e "Registrar-se" onde ele deve fazer o seu cadastro de usuário caso ele não tenha o login. Além de aparecer um pouco sobre o nosso grupo PRSystems e sobre a aplicação "Rotineira"

Segundamente se o usuário clicar em "Login" ou "Registrar-se" abrirá a página "Realize seu login", onde o usuário pode colocar o seu nome e sua senha para usufruir dos benefícios da Rotineira, caso o usuário não tenha uma conta, ele apertará o botão "Novo Usuário" para realizar o seu cadastro. Nessa etapa ele irá informar o seu nome de Usuário, o seu nome completo, e-mail e a sua senha seguida da confirmação da senha. Ao fazer o cadastro, o usuário irá preencher os campos de usuário e senha e clicar em "entrar".

Ao fazer o login, aparecerá uma janela modal perguntando se o usuário quer receber dicas de estudos, se sim ele apertará em "Clique Aqui" irá preencher o formulário sobre matérias e clicar em "Salvar". Logo após isso, ele será transportado até a página "Home" onde aparecerá de cara a nossa Navbar e as "Tarefas do Dia". Lá ele poderá adicionar as suas tarefas escrevendo-as no campo amarelo e apertando "Enter" no teclado de seu computador, assim, aparecerá a sua tarefa, com um campo em forma de quadrado para o usuário clicar e aparecer um "certo" de forma figurativa, indicando que aquela tarefa já foi realizada. Na direita da tela, estará presente a foto que a pessoa quiser colocar, o seu nome e logo abaixo uma seta para a direita, ao clicar nela, o usuário será redirecionado a sua página pessoal onde será apresentado alguns dados da pessoa, a sua rotina a direita e uma opção de "Logout" caso usuário queira sair de sua conta.

Do lado da logo, no canto superior esquerdo, terá 4 botões: "Home" para voltar a página principal, "Estudos" para ir a aba sobre estudos, "Exercícios" para ir à aba de exercícios físicos e a "Agenda" para ver as suas informações no bloco de notas e calendário.

Ao clicar em "Estudos" o usuário será redirecionado até a página de estudos, onde terá um cronômetro para contar o tempo feito de seus afazeres relacionados aos seus estudos, terá também as suas matérias e o método pomodoro, utilizado bastante em pessoas que tem TDH (Déficit de atenção) clique aqui: https://www.napratica.org.br/pomodoro/ para saber mais sobre o método.

Ao clicar em "Exercícios" será redirecionado para a página de exercícios físicos, essa página servirá para o usuário adicionar os seus exercícios físicos de diversas modalidades como yoga, musculação e natação.

Ao clicar em "Agenda" aparecerá o bloco de notas onde a pessoa pode colocar os seus afazeres de maneira mais detalhada e um calendário abaixo onde ela poderá fixar uma data importante para ela.

E em um último ato ao clicar na logo da Rotineira ou em home ela volta para a página principal onde terão as tarefas do dia e mais.





## Registros de Testes
### Software
### Usabilidade
Estando na página principal, será visto um resumo das vantagens de usar nossa aplicação e um pequeno texto sobre quem somos, os criadores do conteúdo.
Além disto duas opções de botões um para novos usuários no botão registre-se, e um botão para já usuários com inscrição Login. 

> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE1.png)
Caso seja um novo usuário e clique em registre-se, será aberto a página abaixo para o usuário inserir seus dados e criar seu login. 
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE2.png)
Após o registro ou login, será redirecionado para página principal (Home), sendo demostrado as informações do usuário que fez o login e suas atividades adicionadas pelo próprio.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE3.png)
No menu acima com as opções para navegar dentro do site.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE4.png)
Selecionando a próxima página descrita como “Estudos” será redirecionado para página a seguir.
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE5.png)
Nesta guia de estudos serão encontrados diversos elementos para auxílio das atividades do usuário. Como por exemplo o cronometro (Para mensurar tempo das atividades), pomodoro (Técnica usada para realizar atividades e se manter mais focado, fazendo tal atividade por um ciclo e descansando por um outro ciclo), e um bloco de notas para anotações pertinentes a cada assunto descrito pelo usuário. 
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE6.png)
Navegando para próxima aba descrita como “exercícios”, o usuário é redirecionado para uma aba onde se encontra caso queira, os exercícios físicos para pratica pelo usuário. 
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE7.png)
Navegando para próxima e última aba descrita como “Agenda” se encontra o bloco de notas com anotações criadas pelo usuário. 
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE8.png)
Nesta mesma aba se encontra o calendário, para consulta da data e adição de eventos nas datas pertinentes. 
> ![imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/TESTE9.png)
Encontrando ao rodapé de todas as páginas, encontra-se as informações de contato pertinentes aos criadores. 

# Referências

HISTÓRIAS de usuários com exemplos e um template, Atlassian. Disponível em: <https://www.atlassian.com/br/agile/project-management/user-stories> Acesso: 22, março de 2022.
O que são Requisitos Funcionais e Requisitos Não Funcionais? Codificar. Disponível em: <
https://codificar.com.br/requisitos-funcionais-nao-funcionais/ > Acesso: 22, março de 2022.

RESTRIÇÕES do projeto: entenda de vez o que é esse conceito, Robson Camargo. Disponível em: <https://robsoncamargo.com.br/blog/Restricoes-do-projeto> Acesso: 22, março de 2022.

HISTÓRIAS de usuários com exemplos e um template, Atlassian. Disponível em: <https://www.atlassian.com/br/agile/project-management/user-stories> Acesso: 22 mar.2022.

MARTINS, Pablo Luiz; MACHADO, Polyana Carvalho; FERREIRA, Hugo Lucindo. A atuação do gestor de pessoas no contexto das rotinas trabalhistas. Saberes Interdisciplinares, [S.l.], v. 8, n. 15, p. 27-37, nov. 2017. ISSN 2675-2255. Disponível em: <http://periodicos.uniptan.edu.br:8090/revistas/index.php/SaberesInterdisciplinares/article/view/26>. Acesso em: 7 abr. 2022.

STEDILE, Cristiano da Silva de Mello1; ALVES, Juliano Nunes2. MANUAL DE PRÁTICAS COMO NORTEADOR DE ROTINAS, 2013. Disponível em: <https://home.unicruz.edu.br/seminario/anais/anais-2013/XVIII%20SEMIN%C3%81RIO%20INTERINSTITUCIONAL%202013%20-%20ANAIS/CCSA/ADMINISTRACAO/C.ORAL/MANUAL%20DE%20PR%C3%81TICAS%20COMO%20NORTEADOR%20DE%20ROTINAS.pdf> Acesso em: 7 abr.2022.


