# NLW_#1
## [Rocketseat](https://rocketseat.com.br/) - Next Level Week - Starter

## Back-end
* Responsabilidades
  - Receber pedidos do cliente
  - Ex. Pedido para entrar no site do youtube,o **pedido** chegou ate o back end(servidores)e **respondeu** deixando entrar no site
* Regras de negocio ( para um login por exemplo )
  - Validar	um cpf
  - Verificar se a senha bate com o cpf cadastrado
* Envio de respostas
  - Caso o passo anterior de login esteja com as regras de negocio todas corretas, o sistema envia uma resposta de que voce esta logado ou caso de algo errado, o sistema envia uma resposta negativa (erro)
* Dados
  - Tratamento dos dados enviados
  - Armazenar os dados ( como o cpf, senha, ... )

## Tecnologias
  - Linguagem Javascript
  - Node.js
  - Guit Bash
  - Banco de dados: SQLite
  
  ## Instalações
* Instalar o [NodeJS](https://nodejs.org/en/) versão LTS
* Instalar o [Git Bash](https://gitforwindows.org/)

## Configurações no Terminal **ctrl+"**
* Para verificar a versão do Node
  - node -v **( usada no curso v12.18.0 )**
* Versão do NPM
  - npm - v **( usada no curso 6.14.4 )**
  >**O que é NPM**
  >* node package manager
  >- O npm é um gerenciador de pacotes para a linguagem de programação JavaScript. É o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.
* Para limpar o terminal 
  - ctrl+l
* Entrar no ambiente do node
  - **node** e você ja está nele **"Welcome to Node.js v12.18.0"**
* Para sair do ambiente
  - .exit
  
  ## PASSO A PASSO DAS AULAS
  * Estrutura de pastas do projeto
  
  ![Estrutura de pastas do projeto](https://user-images.githubusercontent.com/66738539/84302358-8a45e000-ab2b-11ea-8ac8-e95ac5cf127c.png)

## Criação do servidor
* Instalação dos módulos (Dependencias/packages)
  - Aplicação feita por terceiros para facilitar processos
* Dar o comando **npm init -y**
  - Para criação do package.json
* Instalar o **express**
  - npm install express
  
## Configuração do servidor
* Criar e iniciar o servidor
  - ver arquivo "server.js"
* Rodar o servidor
  - node src/server.js
* Parar/Fechar o servidor
  - ctrl+c
* Página inicial
  - [http://localhost:3000/](http://localhost:3000/)
  
#### Método HTTP - GET: Recupera informações do back-end  
  
#### Para não ficar sempre parando a aplicação e tendo que subir novamente com alterações, instalar um módulo
  * npm install nodemon -D
    - Monitora alterações do código e reinicia automaticamente 
  
  ```
  server.get("/", (req, res) => {         
      res.send("Hello World")
    	})
server.listen(3000)
  ```
 
* Arquivos estáticos 
  - server.use(express.static("public"))
  
## Rotas de aplicação
* Requisição e Resposta
  - req: Requisição = Pedido
  - res: Resposta
  
* O que são verbos/métodos HTTP
  - GET	- Buscar uma ou mais informações do back-end
  - POST	- Criar uma nova informação no back-end
  - PUT	- Atualizar uma informação existente no back-end
  - DELETE	- Remover uma informação do back-end
  
* Tipos de envio de dados ( de front para back )
  - Query strings / body
  
## Template Engine  
#### Vai trabalahar com os arquivos html de uma forma inteligente. Arquivos com funções. Dados dinâmicos.
* Instalar Nunjucks
  - npm install nunjucks
* Renderizar
   - Passar pelo motor do nunjucks e devolver o HTML puro
   
 * Enviar dados para o HTML
```
// Rota da Página inicial 
   server.get("/", (req, res) => { 
    	return res.render("index.html")    
   })

// Rota da página de Cadastro do ponto de coleta
   server.get("/create-point", (req, res) => {                         
       return res.render("create-point.html")      
   })
```
## INSTALAR EXTENSÃO no VSCode 
  * nunjucks-template

#### **arquivo setting.json**
```
"files.associations": {
    "*.html": "njk"
      },
   	"emmet.includeLanguages": {
      "njk":"html"
   	},
   	"vsicons.associations.files": [
      { "icon": "nunjucks", "extensions": ["html"], "format": "svg" }
    	]
```
 * Usando nunjucks
 ```
 INCLUDE
{% include "partials/page-header.html" %}
{% include "partials/modal.html" %}

VARIABLES
const nunjucks = require("nunjucks")

EXTENDS
{% extends "layout.html" %}

BLOCK
{% block styles %}{% endblock styles %}

 ```
 
 ## Dados
 * Enviando dados
```
Enviando para o nunjuncks
	 { title: "Um título"}

Resposta do pedido/ Enviando dado para o front-end
	 server.get("/", (req, res) => {                       
        return res.render("index.html")    
   }) 
```
  
 ## Estrutura das pastas do projeto
 ![Estrutura de pastas do projeto - Final](https://user-images.githubusercontent.com/66738539/84303731-d72ab600-ab2d-11ea-969c-8ee13fd2057e.png)
