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

const ERROR_REQUIRED_ID = {
    status: 400,
    message: 'O atributo ID é obrigatório na requisição'
}

const ERROR_INVALID_CONTENT_TYPE = {
    status: 415,
    message: 'O tipo de mídia Content-Type não é compatível com o servidor, [application/json]'
}

//constantes de sucesso
const CREATED_ITEM = {
    status: 201,
    message: 'Registro criado com sucesso'
}

const UPDATED_ITEM = {
    status: 200,
    message: 'Registro atualizado com sucesso'
}

const DELETED_ITEM = {
    status: 200,
    message: 'Registro removido com sucesso'
}

module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM,
    ERROR_REQUIRED_ID,
    UPDATED_ITEM,
    DELETED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
}

