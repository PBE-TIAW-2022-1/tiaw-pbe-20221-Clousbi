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
> [imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/PERSONA%201.png)

>DADOS
* Nome: Roni. 
* Idade: 30-37 anos.
* Ocupação: Formado em engenharia mecânica e trabalha em uma fábrica de automóveis.
* Pesonalidade: Sistemático, perfeccionista e dedicado.
* Objetos: Maleta, notebook e plantas.
* Motivação: Crescer profissionalmente e ter uma rotina de qualidade no quesito de otimização de tempo.
* Frustações: Medo de falhar e decepcionar seus superiores.
* Hobbies, história: Meditação, caminhada, pesca e plantar.
> [imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/PERSONA%202.png)

>DADOS
* Nome: Rory
* Idade: 25-30 anos
* Ocupação: Recém formada em Artes visuais e trabalha em uma galeria.
* Pesonalidade: Brincalhona, criativa e perfeccionista.
* Objetos: Quadro, tinta, tarô e cristais.
* Motivação: Mostrar suas artes para expressar seu sentimento para o mundo.
* Frustações: Medo de insetos e do escuro.
* Hobbies, história: Leitura de tarô, pintura, escultura, escutar música, ir em museus e galerias.
> [imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/PERSONA%203.png)



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
> [imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/FLUXO%20DO%20USUARIO.png)

## Wireframes
Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura X. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. São eles:
* Cabeçalho - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
* Conteúdo - apresenta o conteúdo da tela em questão;
* Barra lateral - apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo.


* Figura 1 - Página principal
> [imagem]()
* Figura 2 - Registro do usuário
> [imagem]()
* Figura 3 - Confirmação do email
> [imagem]()
* Figura 4 - Login
> [imagem]()
* Figura 5 - Home
> [imagem]()
* Figura 6 - Informações do usuário
> [imagem]()
* Figura 7 - Aba exercícios
> [imagem]()
* Figura 8 - Dia-a-dia rotina
> [imagem]()
* Figura 9 - Aba estudos
> [imagem]()
* Figura 10 - Aba agenda
> [imagem]()
* Figura 11 - LoginWEB
> [imagem]()
* Figura 12 - HomeWEB
> [imagem]()
* Figura 13 - Aba de estudosWEB
> [imagem]()
* Figura 14 - Aba de exercíciosWEB
> [imagem]()
* Figura 15 - AgendaWEB
> [imagem]()
* Figura 16 - InformaçõesWEB.
> [imagem]()

# Metodologia

A metodologia contempla as definições de ferramental utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Kanban estruturado com as seguintes listas: 
>
*	Para fazer: Tudo aquilo que precisa ser executado para o projeto ser concluído;

*	Planejar: Área onde se separa como irá ser feito cada tarefa, quem vai fazer, que dia, como. A maioria dos planejamentos são feitos por reuniões semanais via Discord;

*	Executar: Depois que cada um tem sua tarefa designada, é separado em “fazendo” e “feito” e a pessoa responsável por aquela tarefa.

*	Revisão: Com a tarefa feita, o responsável dela revisa para garantir que não tenha erros ou caso outro integrante queira acrescentar algo, é feito tudo na revisão;

*	Completo: Após a revisão, é concluído as tarefas designadas, e com essa área expondo os que já foram feitos, serve como lembrete de tudo que já foi feito e revisado.

> [imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/KANBAN.png)


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
|Processo de Design Thinkgin  | Word | - | 
|Repositório de código | GitHub | https://github.com/Clousbi/ProjetoRotina | 
|Hospedagem do site | - | - | 
|Protótipo Interativo 1 | Figma | https://www.figma.com/proto/owfF2t9p0Sc4RZsWc4TUpz/Untitled?node-id=16%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A2&show-proto-sidebar=1 | 
|Protótipo Interativo 2 | Figma | https://www.figma.com/proto/YAgKSDlkGNv2LQq4LYepvH/Prototyping-in-Figma?node-id=0%3A78&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2 | 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com/Clousbi/ProjetoRotina) foi utilizado para hospedagem do repositório `ProjetoRotina`. Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Feature Branch Workflow, mostrado na Figura a seguir.

> **Exemplo - GitHub Feature Branch Workflow**:
> [imagem](https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/master/docs/relatorio/imagens/FLUXO%20DO%20CODIGO.png)

*	`Laranja` - .html
*	`Azul` - .css
*	`Amarelo` - .js

O fluxo está dividido por ‘commits’, onde cada faixa linear representa uma modificação feita em um determinado dia.
> [imagem]()
As setas representando a integração dos códigos com outros. Por exemplo, um commit de **js** relacionado ao commit de **html**.

> Quanto à gerência de issues, o projeto ainda não adotou esses métodos.


# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)

# Template do Site
O padrão de layout a ser utilizado pelo site tem correspondência ao projeto de Interface elaborado anteriormente, conforme Figura a seguir. Na parte azul, corresponde a área do “<nav>” junto com a logo. Na parte amarela é o “<main>” onde a maioria dos templates são divididas em duas colunas. Por último, na parte laranja fica o “<footer>”, com as informações da empresa e o contato.
> [imagem]()

O template criado está disponível no site http://github.com/…..  e é composto pelos seguintes principais layouts: 
* Home;
* Modal de login;
* Tela de estudos.

A responsividade segue o padrão do Bootstrap 4.1.1.

* Home 
> [imagem]()
* Login
> [imagem]()
* Tela de Estudos
> [imagem]()





# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

HISTÓRIAS de usuários com exemplos e um template, Atlassian. Disponível em: <https://www.atlassian.com/br/agile/project-management/user-stories> Acesso: 22, março de 2022.
O que são Requisitos Funcionais e Requisitos Não Funcionais? Codificar. Disponível em: <
https://codificar.com.br/requisitos-funcionais-nao-funcionais/ > Acesso: 22, março de 2022.

RESTRIÇÕES do projeto: entenda de vez o que é esse conceito, Robson Camargo. Disponível em: <https://robsoncamargo.com.br/blog/Restricoes-do-projeto> Acesso: 22, março de 2022.

HISTÓRIAS de usuários com exemplos e um template, Atlassian. Disponível em: <https://www.atlassian.com/br/agile/project-management/user-stories> Acesso: 22 mar.2022.

MARTINS, Pablo Luiz; MACHADO, Polyana Carvalho; FERREIRA, Hugo Lucindo. A atuação do gestor de pessoas no contexto das rotinas trabalhistas. Saberes Interdisciplinares, [S.l.], v. 8, n. 15, p. 27-37, nov. 2017. ISSN 2675-2255. Disponível em: <http://periodicos.uniptan.edu.br:8090/revistas/index.php/SaberesInterdisciplinares/article/view/26>. Acesso em: 7 abr. 2022.

STEDILE, Cristiano da Silva de Mello1; ALVES, Juliano Nunes2. MANUAL DE PRÁTICAS COMO NORTEADOR DE ROTINAS, 2013. Disponível em: <https://home.unicruz.edu.br/seminario/anais/anais-2013/XVIII%20SEMIN%C3%81RIO%20INTERINSTITUCIONAL%202013%20-%20ANAIS/CCSA/ADMINISTRACAO/C.ORAL/MANUAL%20DE%20PR%C3%81TICAS%20COMO%20NORTEADOR%20DE%20ROTINAS.pdf> Acesso em: 7 abr.2022.


