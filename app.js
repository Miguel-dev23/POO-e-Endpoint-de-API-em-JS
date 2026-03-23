const http = require("http")
const Mensagem = require("./mensagem")

const server = http.createServer((req, res) => {

    // 🔥 evita erro do favicon
    if (req.url === "/favicon.ico") {
        res.writeHead(204)
        return res.end()
    }

    if (req.url === "/api/mensagem" && req.method === "GET") {
// cria uma nova mensagem
        const mensagem = new Mensagem(
            "Olá mundo",
            "Miguel"
        )
// tranforma o objeto em texto no formato JSON
        const resposta = JSON.stringify(mensagem.toJSON())
// avisa o navegador q está enviando em JSON
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(resposta)

    } else {

        res.writeHead(404)
        res.end("Rota não encontrada")

    }

})

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})



//http://localhost:3000/api/mensagem

//