var banco = require('./conexao')

var livroSchema = new banco.Schema({
    _id: {
        type: banco.Schema.Types.ObjectId
    },
    titulo: {
        type: String
    },
    codEditora: {
        type: Number
    },
    resumo: {
        type: String
    },
    autores: {
        type: [String]
    },
})

const Livros = banco.model('livros', livroSchema);

module.exports = Livros;