const http = require("http")
const Mensagem = require("./mensagem")

const server = http.createServer((req, res) => {

    if (req.url === "/api/mensagem" && req.method === "GET") {

        const mensagem = new Mensagem(
            "Olá mundo",
            "Miguel"
        )

        const resposta = JSON.stringify(mensagem.toJSON())

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