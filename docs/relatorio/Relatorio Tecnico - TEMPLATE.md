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
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

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
 
> DADOS
* Nome: Tina 
* Idade: 20-25 anos 
* Hobby: Estudar nutrição, escutar música, jogar videogame, jogar vôlei. 
* Trabalho: Estudar nutrição, nutricionista de academia 
* Personalidade: criativa, ambiciosa, carismática
* Sonhos: Referência na nutrição para pessoas que buscam o físico a saúde física e mental
* Motivações e esperanças: Ela que ser um exemplo para as pessoas para que o mundo 
seja mais proativo e organizado.
* Medos e dilemas: não conseguir se organizar na faculdade e desapontar as pessoas que 
não acreditam nela. 
* Estilos: Com pouco musculo, morena, alta 1,82, olhos azuis, fone de ouvido, fita de 
treino verde, roupas pretas.

> OBJETIVOS-CHAVE
Quais são os objetivos chave da pessoa durante a utilização do serviço? Por que eles precisam 
deste serviço?
* Objetivo: Ajudar a organizar a rotina

> OBJETOS E LUGARES
Quais objetos físicos e digitais essa pessoa usa? Quando, onde e como ela os usa?
* Objetos: Fone de ouvido, livro, bola de vôlei
* Lugares que mais frequenta: biblioteca, escola, quadra, academia, shows

> COMO DEVEMOS TRATÁ-LA
Como devemos tratá-la para que ela se sinta bem? Quais os tipos de comportamento que deixam 
essa pessoa feliz?
* Como gosta de ser tratada: conversas espontâneas e aleatórias, respeito e lealdade

> NUNCA DEVEMOS
O que nunca devemos fazer em relação a essa pessoa? Que tipo de atitude ela não suporta? O 
que deixa essa pessoa furiosa?
* Coisas que não gosta: pessoas não comprometidas, mentirosas e amizade passageiras 
e não gosta de tomate.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Estudante do ENEM | Uma rotina focada em estudos para faculdade | dedicar e montar um ambiente de estudos corretamente. |
|Pessoa que vai na academia | Aprender a dividir meu treino corretamente | Fazer o "projetinho verão" mais top possível |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Receber informações do usuário | ALTA | 
|RF-002| Planilhas com atividades e lembretes referentes às necessidades dos usuários   | ALTA |
|RF-003|Sistemas de alarmes (referente aos lembretes)   | MÉDIA |
|RF-004| Bloco de notas (caso haja necessidade)  | MÉDIA |
|RF-005| Dicas para o usuário (ex.: rotina de estudo, dica: como ajustar/montar um local de estudo produtivo)| BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança de dados   | ALTA | 
|RNF-002| Armazenamento offline (caso Mobile) |  BAIXA | 
|RNF-001| Acessibilidades  | MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Financeiro (se não fosse fictício) |
|02| Tempo disponibilizado    |
|03| Uso da aleatoriedade no site    |

# Projeto de Interface

Como nosso projeto requer que desenvolva um site WEB, desenvolvemos primeiro um fluxo de usuário simples para termos uma ideia principal de como vamos colocar no plano do site. Após esse processo, tivemos a decisão de desenvolver por meio mobile e depois em site desktop. Por ser algo que o usuário vai demandar mais na prática, o uso mobile é um meio mais usual do nosso projeto ser utilizado.

## User Flow

> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/56a0fc5559097bc2e3c7a8a698bf66d7472c7ab8/docs/relatorio/fluxo%20de%20usuario.png

## Wireframes

* Figura 1 - Página principal
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/79e8b5550102b15f8b352d69069ade1be62e148d/docs/relatorio/1.png
* Figura 2 - Registro do usuário
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/2.png
* Figura 3 - Confirmação do email
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/3.png
* Figura 4 - Login
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/4.png
* Figura 5 - Home
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/5.png
* Figura 6 - Informações do usuário
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/6.png
* Figura 7 - Aba exercícios
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/7.png
* Figura 8 - Dia-a-dia rotina
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/8.png
* Figura 9 - Aba estudos
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/9.png
* Figura 10 - Aba agenda
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/10.png
* Figura 11 - LoginWEB
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio11.png
* Figura 12 - HomeWEB
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/12.png
* Figura 13 - Aba de estudosWEB
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/13.png
* Figura 14 - Aba de exercíciosWEB
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/14.png
* Figura 15 - AgendaWEB
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/15.png
* Figura 16 - InformaçõesWEB.
> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/6d1a57f25b0cd76f093cdc421e879a76b789df5b/docs/relatorio/16.png

# Metodologia

Nossa metodologia foi baseada no método Kanban, onde os nomes foram separados por cores e divididos as tarefas em fluxos de "Fazer", "Fazendo", "Revisão" e "Feito", informados com a semana e o dia feitos.

Segue abaixo os anexos:

> https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/87aa82059b51be0972b44e2db4028b096d602aa1/docs/relatorio/METODOLOGIA.pptx

## Divisão de Papéis

* Bianca Marques Teixeira: Metodologia, Projeto de Interface, Editar no Git, Contexto do projeto, Persona, Templates.
* Caio Machado Taussig: Criação da Logo, Contexto do projeto, Persona, Templates.
* Carlos Alberto Diniz Junior: Especificação, Persona, Templates.
* Diogo Henrique Afonso Silva: Projeto de Interface, Slides, Persona, Templates.
* Robert William Batista dos Santos Silva : Projeto de Interface, Persona, Templates.
* Vinicius Resende do Carmo: Projeto de Interface, Persona, Templates.

## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Word | - | 
|Repositório de código | GitHub | https://github.com/Clousbi/ProjetoRotina | 
|Hospedagem do site | - | - | 
|Protótipo Interativo 1 | Figma | https://www.figma.com/proto/owfF2t9p0Sc4RZsWc4TUpz/Untitled?node-id=16%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A2&show-proto-sidebar=1 | 
|Protótipo Interativo 2 | Figma | https://www.figma.com/proto/YAgKSDlkGNv2LQq4LYepvH/Prototyping-in-Figma?node-id=0%3A78&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2 | 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com/Clousbi/ProjetoRotina) foi utilizado para hospedagem do repositório `ProjetoRotina`.

> O projeto segue a seguinte convenção para o nome de branchs:

* `main`: versão estável já testada do software
* `template`: templates criados 
* `interface`: interfaces do projeto
* `especificacao`: pesquisas específicas do projeto
* `contexto`: desenvolvimento do projeto

> Quanto à gerência de issues, o projeto ainda não adotou esses métodos.


> **Exemplo - GitHub Feature Branch Workflow**:

https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-Clousbi/blob/56a0fc5559097bc2e3c7a8a698bf66d7472c7ab8/docs/relatorio/git.png

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

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
