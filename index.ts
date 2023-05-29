// O arquivo index.js é o arquivo inicial
// a ser acessado quando uma conexão
// CLIENTE-SERVIDOR é estabelecida.
// É a partir do arquivo index.js que os
// outros arquivos serão chamados.
import { AppDataSource } from "./src/databases/data-source"

const express = require("express")

const app = express()// criando um servidor http

app.use(express.json())// utilizando o servidor http

app.get('/', (request, response) => {
    return response.json("Server Online")
})// definindo a rota principal(primeira pagina('/')) / request e response nesse caso são parametros de uma função anonima.

app.listen(3333, () => console.log("servidor online na porta 3333")) //porta padrão do node(3333) / arrow function para setar no terminal que o servidor subiu
// para descer o servidor é só apertar ctrl + c no terminal.
AppDataSource.initialize()