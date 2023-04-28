//Arquivo responsavel pelas variaveis, constantes e funções globais do projeto

//constantes de erros
const ERROR_REQUIRED_DATA = {
    status: 400,
    message: 'Existem dados obrigatorios que não foram preenchidos'
}

const ERROR_INTERNAL_SERVER = {
    status: 500,
    message: 'Erro interno no servidor de banco de dados'
}

//constantes de sucesso
const CREATED_ITEM = {
    status: 201,
    message: 'Registro criado com sucesso'
}

module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM
}

