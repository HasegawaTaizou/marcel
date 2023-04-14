/*
para realizar a conexão com o banco de dados iremos utilizar o PRISMA
npm install prisma --save
npx prisma
npx prisma init
npm install @prisma/client
*/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.user(cors())

    next()
})

//Endpoint: Retorna todos os dados de alunos
app.get('v1/lion-school/aluno', cors(), async function(request, response) {

})

//Endpoint: Retorna dados do aluno pelo id
app.get('v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//Endpoint: Inserir novo aluno
app.post('v1/lion-school/aluno', cors(), async function(request, response) {

})

//Endpoint: Atualiza um aluno pelo id
app.put('v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//Endpoint: Exclui um aluno pelo id
app.delete('v1/lion-school/aluno/:id', cors(), async function(request, response) {

})