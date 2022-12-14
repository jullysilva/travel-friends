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

Atráves da necessidade constante de pessoas que viajam e buscam se conectar com o lugar que visam se estabelecer, seja de forma comunicacional ou no entendimento de informações importantes a respeito de uma localidade. O objetivo deste presente trabalho visa o desenvolvimento de uma aplicação utilitária a viajantes no que tange a criação de passeios que podem ser comportilhados concomitantemente a criação de eventos e troca de informações atráves de uma comunidade.

## Histórico de Revisões

| **Data** | **Autor** | **Descrição** | **Versão** |
| --- | --- | --- | --- |
| 03/09/2022|Lorrayne Reis |Desenvolvimento das seções 1, 1.1 e 1.2 | 1.0|
| 14/09/2022|Lorrayne Reis |Desenvolvimento das seções 2 e 3 | 1.0|
| 17/09/2022|Lorrayne Reis |Alterações |1.1|
| 16/11/2022|Laura Lourdes |Alterações nas seções 2, 2.1,2.2 e 3.1 |1.2|
| 23/11/2022|Laura Lourdes |Alterações nas seções 2, 2.1,2.2 e 3.1 |1.3|
| 14/12/2022|Laura Lourdes |Alterações e desenvolvimento de todas as seções | 1.4|

## SUMÁRIO

1. [Apresentação](#apresentacao "Apresentação") <br />
	1.1. Problema <br />
	1.2. Objetivos do trabalho <br />
	1.3. Definições e Abreviaturas <br />

2. [Requisitos](#requisitos "Requisitos") <br />
	2.1. Requisitos Funcionais <br />
	2.2. Requisitos Não-Funcionais <br />
	2.3. Restrições Arquiteturais <br />
	2.4. Mecanismos Arquiteturais <br />

3. [Modelagem](#modelagem "Modelagem e projeto arquitetural") <br />
	3.1. Visão de Negócio <br />
	3.2. Visão Lógica <br />

4. [Avaliação](#avaliacao "Avaliação da Arquitetura") <br />
	4.1. Cenários <br />
	4.2. Avaliação <br />

5. [Apêndices](#apendices "APÊNDICES")<br />


<a name="apresentacao"></a>
# 1. Apresentação

No atual cenário pós pandemia é perceptível um aumento de viagens dentro do território nacional brasileiro. Essas viagens são caracterizadas por serem curtas e locais com fácil acesso, principalmente para automóveis, por isso os viajantes optam por conhecer lugares classificados como pontos turísticos, museus, parques, bares e que oferecem outras atividades culturais.
<br />
Desejando conforto e praticidade, é necessário realizar o planejamento da viagem e muitas vezes as pessoas optam por consumir conteúdos disponíveis na internet em sites de acomodação, transportes e guias. Isso demonstra uma mudança de paradigma do turista brasileiro no intuito de maior planejamento e na opção por explorar lugares de maneiras mais efetivas e em curto prazo.

## 1.1. Problema

Um dos principais problemas enfrentados por viajantes, turistas e exploradores é o planejamento de suas atividades a serem realizadas durante o passeio, uma vez que desejam conhecer muitos pontos que na maioria das vezes não se encontram em uma distância próxima ou falta informações sobre a localidade.
<br />
No caso dos turistas, a maioria não possui conhecimento de eventos ocorridos na cidade em comparação a um nativo que conhece páginas de entretenimentos específicas de sua cidade, e muitas vezes, não encontram uma fonte confiável de troca de informações entre pessoas.

## 1.2. Objetivos do trabalho

O objetivo geral do trabalho é apresentar uma aplicação que possa fomentar as atividades turísticas em diferentes localidades e conectar pessoas interessadas em trocar experiências. Para isso, os usuários vão poder criar encontros em pontos selecionados e disponibilizar para outras pessoas. 

## 1.3. Definições e Abreviaturas
*MVC* (Model-View-Controlle): Padrão de projeto de software que visa a separação de responsabilidades entre camadas

*API* (Application Programming Interface): Conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas por meio de comunicações.

*IOS*:  Sistema operacional móvel da Apple Inc

*ReactJS*: Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web

*RF*: Requisito funcional

*RFN*: Requisito não funcional

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
| RNF001| O software deve ser compátivel com os sistemas Android e IOS|
| RNF002| A versão web da aplicação deve operar corretamente nos seguintes navegadores: Google Chrome, Edge e Firefox|
| RNF003| O usuário deve estar autenticado para utilizar os serviços|
| RNF004| A plataforma só pode utilizar os dados do usuário mediante autorização|
| RNF005| Deve ser intuitiva para usuários leigos|
| RNF006| O sistema deve estar disponível nas modalidades mobile e web|
| RNF007| O sistema deve estar disponível para interação com o usuário 24 horas e sete dias na semana (24/7).

## 2.3. Restrições Arquiteturais

- O frontend da aplicação deve ser desenvolvido em ReactJS, React Native e TypeScript;
- A versão web da aplicação deve operar corretamente nos seguintes navegadores: Google Chrome, Edge e Firefox;
- O aplicativo será funcional em dispositivos celulares Android e IOS os quais devem ter acesso a internet;
- O frontend deve ser desenvolvido para consumir diferentes serviços de APIs diferentes, portanto um módulo não pode interferir no outro;
- O serviço de autenticação de usuários será fornecido por uma API externa.
- O serviço de localização no mobile e web serão fornecidos pelas API´s Google Maps e Correios respectivamente.

## 2.4. Mecanismos Arquiteturais

| **Análise** | **Design** | **Implementação** |
| --- | --- | --- |
| Persistência Web | Banco de dados não relacional| MongoDB|
| Persistência Mobile | Banco de dados não relacional| MongoDB|
| Interface Web| Frontend Web |React|
| Interface Mobile| Frontend Mobile |React Native|
| Regra de Negócio| Backend | NodeJS e Expression|
| Teste de Software | Framework | Jest|
| Comunicação| Mensageria | RabbitMQ|
| Integração| Rest | Heroku|

<a name="modelagem"></a>
# 3. Modelagem e projeto arquitetural

Por meio do desenvolvimento em seguimento a utilização do padrão MVC, no qual o back-end composto é responsável por acionar uma ação no controller da aplicação, tendo  esse acesso anteriormente ao model,socilitando de forma não direta ações na view ou seja o front-end da aplicação. Não obstante destaque-se a relação entre a parte estrutural de entrada e saída de dados em conexão com o banco de dados.

**Figura 1 - Visão Geral da Solução**
![image](https://user-images.githubusercontent.com/110981345/207483124-ea2e7f78-9bf1-4e2c-88de-f25a49ac6a53.png)


## 3.1. Visão de Negócio (Funcionalidades)


1.  O sistema deve realizar a autenticação do usuário na plataforma Web e Mobile
2.  O sistema deve permitir que o usuário utilize a plataforma Web para cadastrar o local onde será realizado o passeio
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

- Como uma turista em uma cidade que não conhece, Camila gostaria de ter acesso as informações dos principais pontos turísticos e conhecer os moradores locais.
- Como residente de uma cidade, Paulo gostaria de sair com os amigos para um lugar legal mas precisa de ideias.
- Como explorador da sua cidade natal, Eduardo quer criar passeios e compartilhar com as pessoas interessadas em se aventurar pela cidade. 

## 3.2. Visão Lógica

### Diagrama de Classes

**Figura 2 – Diagrama de classes**

O diagrama de classes representa a estrutura e relações das classes que modelam um objeto. Na imagem abaixo temos representada as seguintes classes da aplicação: local, user e roadmap.

![image](https://user-images.githubusercontent.com/110981345/207605881-c215b224-3dbf-4ab2-a79f-6c8c2c64263d.png)


### Diagrama de componentes

**Figura 3 – Diagrama de Componentes**

![diagrama](https://user-images.githubusercontent.com/55992267/190260891-217a9e1b-bba2-4143-be9a-6288e4a33b79.jpg)

Ex: conforme diagrama apresentado na Figura 3, as entidades participantes da solução são:

<a name="avaliacao"></a>
# 4. Avaliação da Arquitetura

_Esta seção descreve a avaliação da arquitetura apresentada, baseada no método ATAM._

## 4.1. Cenários

**Cenário 1 - Compatibilidade:** A aplicação mobile desenvolvida deve ser compatível com os sistemas Android e IOS. 

**Cenário 2 - Adaptabilidade:** O sistema deve estar disponível nas modalidades mobile e web, e a versão web da aplicação deve operar corretamente nos seguintes navegadores: Google Chrome, Edge e Firefox.

**Cenário 3 - Segurança:** O sistema deve garantir a segurança do usuário, por isso ele deve estar autenticado para utilizar os serviços e a plataforma só pode utilizar os dados do usuário mediante autorização.

**Cenário 4 - Disponibilidade:** O sistema deve estar disponível para interação com o usuário 24 horas e sete dias na semana.

**Cenário 5 - Acessibilidade:** Os ícones e telas da aplicação devem ser intuitivas para usuários considerados leigos.

## 4.2. Avaliação

| **Atributo de Qualidade:** | Compatibilidade|
| --- | --- |
| **Requisito de Qualidade** | Compatibilidade as plataformas Android e IOS |
| **Preocupação:** | A instalação do sistema deve ser suportada nos disositivos móveis com sistemas Android e IOS |
| **Cenários(s):** | Cenário 1 |
| **Ambiente:** | Sistemas operacionais Android e IOS|
| **Estímulo:** | Emulação da aplicação nos ambientes requiridos |
| **Mecanismo:** | O sistema web e mobile devem ser desenvolvidos em Javascript. E o React Native já dá suporte para plataforma Android e IOS |
| **Medida de Resposta:** | A aplicação mobile será desenvolvida usando React Native, que é uma linguagem multi-plataforma, devendo, assim ser possível utilizar a aplicação em dispositivo IOS e Android  |

**Considerações sobre a arquitetura:**

| **Riscos:** | Não existe |
| --- | --- |
| **Pontos de Sensibilidade:** | Não existe |
| _ **Tradeoff** _ **:** | Não existe |

![image](https://user-images.githubusercontent.com/110981345/207476386-b7c76024-9de0-407a-b6ab-62a96bf7e1a2.png)
<br />


| **Atributo de Qualidade:** | Adaptabilidade |
| --- | --- |
| **Requisito de Qualidade** | O sistema deve estar disponível nas modalidades mobile e web |
| **Preocupação:** | O sistema deve ser acessível nos navegadores Google Chrome, Edge e Firefox |
| **Cenários(s):** | Cenário 2 |
| **Ambiente:** | Plataforma Mobile e Web |
| **Estímulo:** | Acessar o sistema em diferentes navegadores |
| **Mecanismo:** | Cadastro de locais e passeios na plataforma web e visualização da mesma informação, tanto na versão web quanto mobile. |
| **Medida de Resposta:** | O passeio cadastrado no Web pode ser visualizado no mobile  |

**Considerações sobre a arquitetura:**

| **Riscos:** | Não existe |
| --- | --- |
| **Pontos de Sensibilidade:** | Não existe |
| _ **Tradeoff** _ **:** | Não existe |

![image](https://user-images.githubusercontent.com/110981345/207475815-5bee1e0b-ad60-42fc-b309-11abb00f1c50.png)
<br />



| **Atributo de Qualidade:** | Segurança |
| --- | --- |
| **Requisito de Qualidade** | Acesso aos recursos deve ser permitido apenas se o usuário tiver autenticado |
| **Preocupação:** | O usuário só deve acessar o sistema se aceitar os termos e  digitar uma senha (criptografada)|
| **Cenários(s):** | Cenário 3 |
| **Ambiente:** | Sistema em operação normal de acesso |
| **Estímulo:** | Acessar as rotas sem autorização |
| **Mecanismo:** | Configuração de segurança de rotas usando react-router-dom |
| **Medida de Resposta:** | Possibilidade de acesso as funcionalidades mediante login do usuário, recebendo token e usando como verificador nas rotas privadas|

**Considerações sobre a arquitetura:**

| **Riscos:** | Não existe |
| --- | --- |
| **Pontos de Sensibilidade:** | Não existe |
| _ **Tradeoff** _ **:** | Não existe |

![image](https://user-images.githubusercontent.com/110981345/207478340-769b25cc-2d44-413e-a02e-4e7bc1814243.png)
![image](https://user-images.githubusercontent.com/110981345/207478415-ed3a3593-ac7c-4f91-b96f-0b22256117b1.png)
![image](https://user-images.githubusercontent.com/110981345/207478536-6edf7430-6cf3-4487-8d70-65aab50f8660.png)  
<br />



| **Atributo de Qualidade:** | Disponibilidade |
| --- | --- |
| **Requisito de Qualidade** | A aplicação deve estar disponível para acesso do usuário|
| **Preocupação:** | Desde que tenha acesso a internet, o usuário deve acessar a aplicação a qualquer momento |
| **Cenários(s):** | Cenário 4 |
| **Ambiente:** | Sistema em operação normal |
| **Estímulo:** | Ao utilizar a aplicação a percepção do usuário é um sistema funcionando sem interrupções|
| **Mecanismo:** | Solicitação de uma requisição ao servidor |
| **Medida de Resposta:** | A aplicação deve responder a solicitação do usuário imediatamente |

**Considerações sobre a arquitetura:**

| **Riscos:** | Não existe |
| --- | --- |
| **Pontos de Sensibilidade:** | Não existe |
| _ **Tradeoff** _ **:** | Não existe |
<br />


| **Atributo de Qualidade:** | Acessibilidade |
| --- | --- |
| **Requisito de Qualidade** | Os ícones e telas da aplicação devem ser intuitivas para usuários considerados leigos|
| **Preocupação:** | Os usuários precisam navegar em uma plataforma organizada |
| **Cenários(s):** | Cenário 5 |
| **Ambiente:** | Telas do sistema |
| **Estímulo:** | Navegação nos principais fluxos do sistema |
| **Mecanismo:** | Um usuário sem vícios utiliza a aplicação nos seus pricipais fluxos sem auxílio |
| **Medida de Resposta:** | O usuário deve coseguir ingressar em um passeio e favoritar sem dificuldades |

**Considerações sobre a arquitetura:**

| **Riscos:** | Não existe |
| --- | --- |
| **Pontos de Sensibilidade:** | Não existe |
| _ **Tradeoff** _ **:** | Não existe |

![image](https://user-images.githubusercontent.com/110981345/207606978-bbc1f7bc-c6a5-4c65-b718-5f2f844701b0.png)
![image](https://user-images.githubusercontent.com/110981345/207607129-3c92ee14-e2a4-4970-b3b1-080d101f8798.png)

<a name="apendices"></a>
# 5. APÊNDICES
https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti5-5104100-travel-friends/tree/master/codigo)
