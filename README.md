# Código do projeto

## Como utilizar o Web

## Como utilizar o Mobile

- Baixe ou clone o projeto
- Configure o expo em sua máquina. Saiba mais em [Expo Go](https://docs.expo.dev/)
- Em codigo/travel-friends-app rode o comando ```npm i``` para instalar as dependências.
- Para iniciar aplicação rode o comando ```npx expo start``` e leia o QRcode com seu smartphone ou abra o emulador digitando ```a``` no mesmo terminal.

## Como utilizar o Server(Backend)

- Baixe ou clone o projeto
- Em codigo/server rode o comando ```npm i``` para instalar as dependências(Tenha certeza de ter o Node instalado em sua máquina).
- Para iniciar o servidor, rode o comando ```npm start```, dessa forma o servidor já estará disponível.

# TRAVEL FRIENDS


**Belle Nerissa Aguiar Elizeu**

**Júlia Leite de Souza**

**Jully Ketely Alves da Silva**

**Lucca Vieira Paz de Bessa**

**Samuel Alves de Castro Baker**


---

Professores:

**Johnatan Alves de Oliveira - **

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

**Resumo**

_A necessidade constante de pessoas que viajam e buscam se conectar com o lugar, adquirir novas experiências e estabelecer novos contatos, contribuiu com o desenvolvimento de uma aplicação utilitária a viajantes que abrange funcionalidades voltadas para suprir as demandas desse público._


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
*MVC* (Model-View-Controlle): Padrão de projeto de software que visa a separação de responsabilidades entre camadas.

*API* (Application Programming Interface): Conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas por meio de comunicações.

*IOS*:  Sistema operacional móvel da Apple Inc.

*ReactJS*: Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

*RF*: Requisito funcional.


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

Por meio do desenvolvimento em seguimento a utilização do padrão MVC, no qual o back-end composto é responsável por acionar uma ação no controller da aplicação, tendo  esse acesso anteriormente ao model, socilitando de forma não direta ações na view ou seja o front-end da aplicação. Não obstante destaque-se a relação entre a parte estrutural de entrada e saída de dados em conexão com o banco de dados.

## 3.1. Visão de Negócio (Funcionalidades)


1.  O sistema deve realizar a autenticação do usuário na plataforma Web e Mobile
2.  O sistema deve permitir que o usuário utilize a plataforma Web para cadastrar o local onde será realizado o passeio
3.  O sistema deve permitir que o usuário utilize a plataforma Web para cadastrar o passeio com as informações necessárias
4.  O sistema deve exibir para o usuário os locais e passeios registrados
5.  O sistema deve perimitir que o usuário favorite seus passeios
6.  O sistema deve permitir que o usuário acesse de forma rápida e prática seus passeios
7.  O sistema deve permitir que o usuário solicite suporte
8.  O sistema deve permitir que o usuário receba notificações

<a name="avaliacao"></a>
# 4. Avaliação da Arquitetura

_Esta seção descreve a avaliação da arquitetura apresentada, baseada no método ATAM._

## 4.1. Cenários

**Cenário 1 - Compatibilidade:** A aplicação mobile desenvolvida deve ser compatível com os sistemas Android e IOS. 

**Cenário 2 - Adaptabilidade:** O sistema deve estar disponível nas modalidades mobile e web, e a versão web da aplicação deve operar corretamente nos seguintes navegadores: Google Chrome, Edge e Firefox.

**Cenário 3 - Segurança:** O sistema deve garantir a segurança do usuário, por isso ele deve estar autenticado para utilizar os serviços e a plataforma só pode utilizar os dados do usuário mediante autorização.

**Cenário 4 - Disponibilidade:** O sistema deve estar disponível para interação com o usuário 24 horas e sete dias na semana.

**Cenário 5 - Acessibilidade:** Os ícones e telas da aplicação devem ser intuitivas para usuários considerados leigos.

## 5. Acesso as aplicações

| **Descrição** | **Link** |
| --- | --- |
| Banco de dados não relacional | [MongoDB](https://cloud.mongodb.com) |
| Frontend Web| Acesso: https://travel-friends-web.onrender.com|
| Backend Web| Acesso: https://travel-friends-api.onrender.com|
| CD| Acesso: [Render](https://render.com/)|
| CI| [CircleCI](https://travel-friends-api.onrender.com](https://app.circleci.com/pipelines/github/jullysilva/travel-friends)https://app.circleci.com/pipelines/github/jullysilva/travel-friends)|
|Ferramenta de teste de qualidade | [SonarQube](https://sonarcloud.io/project/overview?id=jullysilva_travel-friends)|


