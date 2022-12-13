# TRAVEL FRIENDS


**Ian Asenjo Dominguez Cunha,  iadcunha@sga.pucminas.br**

**Jully Ketely Alves da Silva,  jkasilva@sga.pucminas.br**

**Laura Lourdes Coutinho Rodrigues, laura.rodrigues.1199007@sga.pucminas.br**

**Lorrayne Reis Silva, lorrayne.silva.1220819@sga.pucminas.br**

**Warley Leandro dos Anjos, warley.anjos@sga.pucminas.br**

---

Professores:

**Jose Laerte Pires Xavier Junior**

**Cleiton Silva Tavares**


---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

**Resumo**

Atráves da necessidade constante de pessoas que viajam e buscam se conectar com o lugar que visam se estabelecer, seja de forma comunicacional ou no entendimento de informações importandes a despeito de uma localidade.O objetivo deste presente trabalho visa o desenvolvimento de uma aplicação utilitária a viajantes no que tange a criação de roteitos que podem ser comportilhados concomitantemente a criação de eventos e troca de informações atráves de uma comunidade estabelecida com base na distância e localização de membros.Os resultados relevantes obtidos com o trabalho se relaciona...  


## Histórico de Revisões

| **Data** | **Autor** | **Descrição** | **Versão** |
| --- | --- | --- | --- |
| 03/09/2022|Lorrayne Reis |Desenvolvimento da apresentação referente as seções 1,1.1 e 1.2  | 1.0|
| 14/09/2022|Lorrayne Reis |Desenvolvimento da apresentação referente as seções  2 e 3 | 1.0|
| 17/09/2022|Lorrayne Reis |Alterações | 1.1|
| 25/09/2022|Lorrayne Reis |Alterações | 1.2|
| | | | |

## SUMÁRIO

1. [Apresentação](#apresentacao "Apresentação") <br />
	1.1. Problema <br />
	1.2. Objetivos do trabalho <br />
	1.3. Definições e Abreviaturas <br />

2. [Requisitos](#requisitos "Requisitos") <br />
'	2.1. Requisitos Funcionais <br />
	2.2. Requisitos Não-Funcionais <br />
	2.3. Restrições Arquiteturais <br />
	2.4. Mecanismos Arquiteturais <br />

3. [Modelagem](#modelagem "Modelagem e projeto arquitetural") <br />
	3.1. Visão de Negócio <br />
	3.2. Visão Lógica <br />
	3.3. Modelo de dados (opcional) <br />

4. [Avaliação](#avaliacao "Avaliação da Arquitetura") <br />
	4.1. Cenários <br />
	4.2. Avaliação <br />

5. [Referências](#referencias "REFERÊNCIAS")<br />

6. [Apêndices](#apendices "APÊNDICES")<br />


<a name="apresentacao"></a>
# 1. Apresentação

No atual cenário pós pandemia é perceptível um aumento de viagens dentro do território nacional brasileiro. Essas viagens são caracterizadas por serem curtas e locais com fácil acesso, principalmente para automóveis, por isso os viajantes optam por conhecer lugares classificados como pontos turísticos, museus, parques, bares e que oferecem outras atividades culturais.
Desejando conforto e praticidade, é necessário realizar o planejamento da viagem e muitas vezes as pessoas optam por consumir conteúdos disponíveis na internet em sites de acomodação, transportes e guias. Isso demonstra uma mudança de paradigma do turista brasileiro no intuito de maior planejamento e na opção por explorar lugares de maneiras mais efetivas e em curto prazo.

## 1.1. Problema

Um dos principais problemas enfrentados por viajantes, turistas e exploradores é o planejamento de suas atividades a serem realizadas durante o passeio, uma vez que desejam conhecer muitos pontos que na maioria das vezes não se encontram em uma distância próxima ou falta informações sobre a localidade.
No caso dos turistas, a maioria não possui conhecimento de eventos ocorridos na cidade em comparação a um nativo que conhece páginas de entretenimentos específicas de sua cidade, e muitas vezes, não encontram uma fonte confiável de troca de informações entre pessoas.

## 1.2. Objetivos do trabalho

O objetivo geral do trabalho é apresentar uma aplicação que possa fomentar as atividades turísticas em diferentes localidades e conectar pessoas interessadas em trocar experiências. Para isso, os usuários vão poder criar encontros em pontos selecionados e disponibilizar para outras pessoas. 

## 1.3. Definições e Abreviaturas
*MVC*(Model-View-Controlle): Padrão de projeto de software que visa a separação de responsabilidades entre camadas.

*API*(Application Programming Interface):Conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas por meio de comunicações.

## 1.4. Protótipo
https://www.figma.com/file/2X6TUKJbtMx8gNObhrUZUs/Travel-Friends?node-id=0%3A1

<a name="requisitos"></a>
# 2. Requisitos

Esta seção discorre sobre requisitos necessários para a implementação do projeto, de equivalência na contemplação da descrição arquitetural. Os mesmos foram divididos em requisitos funcionais e não funcionais, a seguir:

## 2.1. Requisitos Funcionais


| **ID** | **Descrição** | **Prioridade** |
| --- | --- | --- |
| RF001 | O usuário deve ser capaz de realizar cadastro na plataforma Web| Obrigatório
| RF002 | O usuário deve ser capaz de acessar a plataforma Web através de email e senha anteriormente cadastrados | Obrigatório
| RF003 | Após acessar a plataforma Web o usuário deve ler e confirmar que está em acordo com os termos de uso | Obrigatório
| RF004 | Após acessar a plataforma Web o usuário deve ser capaz de cadastrar um local privado ou pesquisar por um local onde será realizado o seu passeio | Obrigatório
| RF005 | Após acessar a plataforma Web o usuário deve ser capaz de cadastrar o seu passeio com as informações necessárias | Obrigatório
| RF006 | Após acessar a plataforma Web o usuário deve ser capaz de visualizar os locais e passeios registrados | Obrigatório
| RF007 | Após acessar a plataforma Web o usuário deve ser capaz de alterar ou complementar suas informações de perfil | Obrigatório
| RF008 | Após acessar a plataforma Web o usuário deve ser capaz de salvar em favoritos os seus passeios | Obrigatório
| RF009 | Após acessar a plataforma Web o usuário deve ser capaz de pesquisar determinado passseio registrado | Obrigatório
| RF010 | O usuário deve ser capaz de realizar cadastro no aplicativo | Obrigatório
| RF011 | O usuário deve ser capaz de acessar o aplicativo através de email e senha anteriormente cadastrados | Obrigatório
| RF012 | Após acessar o aplicativo o usuário deve ser capaz de alterar a sua senha de registro | Obrigatório
| RF013 | Após acessar o aplicativo o usuário deve ser capaz de visualizar os passeios disponíveis e ingressar | Obrigatório
| RF014 | Após acessar o aplicativo o usuário deve ser capaz de alterar ou complementar suas informações de perfil | Obrigatório
| RF015 | Após acessar o aplicativo o usuário deve ser capaz de salvar em favoritos os seus passeios | Obrigatório
| RF016 | Após acessar a plataforma Web o usuário deve ser capaz de aplicar filtros e pesquisar determinado passseio | Obrigatório
| RF017 | Após acessar a plataforma Web o usuário deve ser capaz de solicitar suporte | Obrigatório
| RF018 | Após acessar a plataforma Web o usuário deve estar apto a receber notificações | Desejável
| RF019 | Após acessar a plataforma Web o usuário deve ser capaz de visualizar seus passeios ingressados em uma agenda | Desejável



## 2.2. Requisitos Não-Funcionais


| **ID** | **Descrição** |
| --- | --- |
| RNF001| A plataforma só pode utilizar os dados do usuário mediante autorização e utilização|
| RNF002| Deve ser intuitiva para usuários leigos|
| RNF003| A interface deve estar em acordo com regras heurísticas de interação entre usuário e máquina|
| RNF004| Os componentes devem ser construídos de forma que possam ser reutilizados|


## 2.3. Restrições Arquiteturais

- A aplicação deve ser construída segundo a arquitetura MVC , na qual o frontend será desenvolvido em React;
- O aplicativo será funcional em dispositivos celulares Android e IOS os quais devem ter acesso a internet;
- O frontend deve ser desenvolvido para consumir diferentes serviços de APIs diferentes, portanto um módulo não pode interferir no outro;
- O serviço de autenticação de usuários será fornecido por uma API externa.

## 2.4. Mecanismos Arquiteturais

| **Análise** | **Design** | **Implementação** |
| --- | --- | --- |
| Persistência | Banco de dados não relacional| MongoDB|
| Front end |Interface de comunicação com o usuário |React, Axios, ESlint |
| Back end | Estruturação de operalização do sistema |Node, Eslint, Express Js, Mongoose|
| Integração |Controle de recursos com web e mobile | MVC|
| Log do sistema |Implementação dos recursos de log do componente de persistência| Jest|
| Teste de Software | Tratamento de exceções criando interações e cenários diferentes para usuários|Jest|
| Deploy |Configuração da IDE de deploy|Vs code |

<a name="modelagem"></a>
# 3. Modelagem e projeto arquitetural


Por meio do desenvolvimento em seguimento a utilização do padrão MVC, no qual o back-end composto é responsável por acionar uma ação no controller da aplicação, tendo  esse acesso anteriormente ao model,socilitando de forma não direta ações na view ou seja o front-end da aplicação.Não obstante destaque-se a relação entre a parte estrutural de entrada e saída de dados em conexão com o banco de dados.

![Visão Geral da Solução](imagens/modelo_arquitetura_tis5.png "Visão Geral da Solução")

**Figura 1 - Visão Geral da Solução**

## 3.1. Visão de Negócio (Funcionalidades)


1. O sistema deve realizar a autenticação do usuário na plataforma Web e Mobile
2. O sistema deve permitir que o usuário utilize a plataforma Web para cadastrar o local onde será realizado o passeio
3.  O sistema deve permitir que o usuário utilize a plataforma Web para cadastrar o passeio com as informações necessárias
4.  O sistema deve exibir para o usuário os locais e passeios registrados
5.  O sistema deve perimitir que o usuário favorite seus passeios
6.  O sistema deve permitir que o usuário acesse de forma rápida e prática seus passeios
7.  O sistema deve permitir que o usuário solicite suporte
8.  O sistema deve permitir que o usuário receba notificações


### Descrição resumida dos Casos de Uso / Histórias de Usuário

#### UC01 – AUTENTICAÇÃO NA PLATAFORMA 01

| **Descrição** | Efetuar autenticação na plataforma e aceitar os termos para utilizar recursos|
| --- | --- |
| **Atores** | Usuário|
| **Prioridade** | Obrigatório |
| **Requisitos associados** | RF001, RF002, RF003, RF11, RF12, RF013|
| **Fluxo Principal** | O usuário realiza o cadastro na plataforma, aceita os termos e realiza o login |

#### UC02 – CADASTRO DE LOCAL PRIVADO 02

| **Descrição** | O usuário cadastra um estabelecimento privado para ser utilizado em passeios |
| --- | --- |
| **Atores** | Usuário |
| **Prioridade** | Obrigatório|
| **Requisitos associados** | RF004|
| **Fluxo Principal** | O usário realiza login na plataforma Web|


#### UC03 – CADASTRO DE PASSEIOS 03

| **Descrição** | O usuário cadastra um passeio na plataforma, para que outros usuários possam ingressar |
| --- | --- |
| **Atores** | Usuário|
| **Prioridade** | Obrigatório |
| **Requisitos associados** | RF005|
| **Fluxo Principal** | Usuário realiza login na plataforma WEB e realiza o cadastro de passeios |

#### UC04 – EXIBIÇÃO DE PASSEIOS 04

| **Descrição** | Os passeios devem ser exibidos de forma prática para os usuários |
| --- | --- |
| **Atores** | Usuário|
| **Prioridade** | Obrigatório|
| **Requisitos associados** | RF006, RF09, RF013, RF016|
| **Fluxo Principal** |O usuário realiza login na plataforma e a página inicial exibe os passeios|

#### UC05 – FAVORITAR PASSEIOS 05

| **Descrição** | O usuário cadastrado na plataforma pode favoritar seus passeios preferidos|
| --- | --- |
| **Atores** |Usuário|
| **Prioridade** | Obrigatório |
| **Requisitos associados** | RF008, RF015|
| **Fluxo Principal** | Usuário reliza login na plataforma, e na página de passeio clica no ícone de favoritar|

#### UC05 – RECEBER NOTIFICAÇÕES 05

| **Descrição** | O usuário cadastrado na plataforma recebe notificações|
| --- | --- |
| **Atores** |Usuário|
| **Prioridade** | Obrigatório |
| **Requisitos associados** | RF018|
| **Fluxo Principal** | Usuário não precisa necessariamente realizar alguma ação para ser notificado, apenas ter cadastro na plataforma|


Exemplos de Histórias de Usuário:

- Como Camila eu quero criar roteiros para compartilhar informações de viagens com outras pessoas.

- Como João eu quero vizualizar uma lista de roteiros para escolher o que mais combina com o meu estilo de viagem.

- Como Priscila eu quero vizualizar a minha localização para me referenciar dentro das ocorrências de eventos próximas.

- Como Pedro eu quero logar em uma aplicação que seja mobile e app para ampliar meu repertório de possibilidades de acesso.

## 3.2. Visão Lógica

_Apresente os artefatos que serão utilizados descrevendo em linhas gerais as motivações que levaram a equipe a utilizar estes diagramas._

### Diagrama de Classes

![TIS_Diagram-Class](https://user-images.githubusercontent.com/42702863/193717317-9ba5996b-a59f-44b0-a0c9-a49bbd152bc5.png)


**Figura 2 – Diagrama de classes (exemplo). Fonte: o próprio autor.**

Obs: Acrescente uma breve descrição sobre o diagrama apresentado na Figura 3.

### Diagrama de componentes

_Apresente o diagrama de componentes da aplicação, indicando, os elementos da arquitetura e as interfaces entre eles. Liste os estilos/padrões arquiteturais utilizados e faça uma descrição sucinta dos componentes indicando o papel de cada um deles dentro da arquitetura/estilo/padrão arquitetural. Indique também quais componentes serão reutilizados (navegadores, SGBDs, middlewares, etc), quais componentes serão adquiridos por serem proprietários e quais componentes precisam ser desenvolvidos._

![diagrama](https://user-images.githubusercontent.com/55992267/190260891-217a9e1b-bba2-4143-be9a-6288e4a33b79.jpg)

**Figura 3 – Diagrama de Componentes (exemplo). Fonte: o próprio autor.**

_Apresente uma descrição detalhada dos artefatos que constituem o diagrama de implantação._

Ex: conforme diagrama apresentado na Figura X, as entidades participantes da solução são:

- **Componente 1** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc magna, accumsan eget porta a, tincidunt sed mauris. Suspendisse orci nulla, sagittis a lorem laoreet, tincidunt imperdiet ipsum. Morbi malesuada pretium suscipit.
- **Componente 2** - Praesent nec nisi hendrerit, ullamcorper tortor non, rutrum sem. In non lectus tortor. Nulla vel tincidunt eros.

## 3.3. Modelo de dados (opcional)

_Caso julgue necessário para explicar a arquitetura, apresente o diagrama de classes ou diagrama de Entidade/Relacionamentos ou tabelas do banco de dados. Este modelo pode ser essencial caso a arquitetura utilize uma solução de banco de dados distribuídos ou um banco NoSQL._

![Diagrama de Entidade Relacionamento (ER) ](imagens/der.png "Diagrama de Entidade Relacionamento (ER) ")

**Figura 4 – Diagrama de Entidade Relacionamento (ER) - exemplo. Fonte: o próprio autor.**

Obs: Acrescente uma breve descrição sobre o diagrama apresentado na Figura 3.

<a name="avaliacao"></a>
# 4. Avaliação da Arquitetura

_Esta seção descreve a avaliação da arquitetura apresentada, baseada no método ATAM._

## 4.1. Cenários

_Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos não funcionais sendo satisfeitos. Os requisitos a seguir são apenas exemplos de possíveis requisitos, devendo ser revistos, adequados a cada projeto e complementados de forma a terem uma especificação completa e auto-explicativa._

**Cenário 1 - Acessibilidade:** Suspendisse consequat consectetur velit. Sed sem risus, dictum dictum facilisis vitae, commodo quis leo. Vivamus nulla sem, cursus a mollis quis, interdum at nulla. Nullam dictum congue mauris. Praesent nec nisi hendrerit, ullamcorper tortor non, rutrum sem. In non lectus tortor. Nulla vel tincidunt eros.

**Cenário 2 - Interoperabilidade:** Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut accumsan erat. Pellentesque in enim tempus, iaculis sem in, semper arcu.

**Cenário 3 - Manutenibilidade:** Phasellus magna tellus, consectetur quis scelerisque eget, ultricies eu ligula. Sed rhoncus fermentum nisi, a ullamcorper leo fringilla id. Nulla lacinia sem vel magna ornare, non tincidunt ipsum rhoncus. Nam euismod semper ante id tristique. Mauris vel elit augue.

**Cenário 4 - Segurança:** Suspendisse consectetur porta tortor non convallis. Sed lobortis erat sed dignissim dignissim. Nunc eleifend elit et aliquet imperdiet. Ut eu quam at lacus tincidunt fringilla eget maximus metus. Praesent finibus, sapien eget molestie porta, neque turpis congue risus, vel porttitor sapien tortor ac nulla. Aliquam erat volutpat.

## 4.2. Avaliação

_Apresente as medidas registradas na coleta de dados. O que não for possível quantificar apresente uma justificativa baseada em evidências qualitativas que suportam o atendimento do requisito não-funcional. Apresente uma avaliação geral da arquitetura indicando os pontos fortes e as limitações da arquitetura proposta._

| **Atributo de Qualidade:** | Segurança |
| --- | --- |
| **Requisito de Qualidade** | Acesso aos recursos restritos deve ser controlado |
| **Preocupação:** | Os acessos de usuários devem ser controlados de forma que cada um tenha acesso apenas aos recursos condizentes as suas credenciais. |
| **Cenários(s):** | Cenário 4 |
| **Ambiente:** | Sistema em operação normal |
| **Estímulo:** | Acesso do administrador do sistema as funcionalidades de cadastro de novos produtos e exclusão de produtos. |
| **Mecanismo:** | O servidor de aplicação (Rails) gera um _token_ de acesso para o usuário que se autentica no sistema. Este _token_ é transferido para a camada de visualização (Angular) após a autenticação e o tratamento visual das funcionalidades podem ser tratados neste nível. |
| **Medida de Resposta:** | As áreas restritas do sistema devem ser disponibilizadas apenas quando há o acesso de usuários credenciados. |

**Considerações sobre a arquitetura:**

| **Riscos:** | Não existe |
| --- | --- |
| **Pontos de Sensibilidade:** | Não existe |
| _ **Tradeoff** _ **:** | Não existe |

Evidências dos testes realizados

_Apresente imagens, descreva os testes de tal forma que se comprove a realização da avaliação._

<a name="referencias"></a>
# 5. REFERÊNCIAS

_Como um projeto da arquitetura de uma aplicação não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT._

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._


<a name="apendices"></a>
# 6. APÊNDICES

_Inclua o URL do repositório (Github, Bitbucket, etc) onde você armazenou o código da sua prova de conceito/protótipo arquitetural da aplicação como anexos. A inclusão da URL desse repositório de código servirá como base para garantir a autenticidade dos trabalhos._
