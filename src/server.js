const express = require("express")                          // Função vai fazer o pedido do express e ele vai voltar e ficar na variavel/const
const server = express()

// Configuração da pasta Pública
    server.use(express.static("public"))                    // Configuração do servidor

// Utilizando o template engine
    const nunjucks = require("nunjucks")
    nunjucks.configure("src/views", {
        express: server,
        noCache: true                                       // Salvando alguns dados na memória para devolver de forma mais rápida. Mas não iremos deixar habilitada
    })

// Configurando caminhos/rotas da minha aplicação
// Método HTTP - GET: Recupera informações do back-end
// req: Requisição = Pedido
// res: Resposta

// Rota da Página inicial 
    server.get("/", (req, res) => {                         // Primeiro argumento - /  ,  Segundo argumento - função que vai executar algo
        return res.render("index.html", { title: "Um título"})       // Abrir um arquivo , dirname é o diretório
    })

// Rota da página de Cadastro do ponto de coleta
    server.get("/create-point", (req, res) => {                         
        return res.render("create-point.html")      
    })

// Rota da página de Pesquisar pontos de coleta
server.get("/search", (req, res) => {                         
    return res.render("search-results.html")      
})


// Rodar o servidor     npm start
server.listen(3000)                                         // Função para abrir a porta 3000