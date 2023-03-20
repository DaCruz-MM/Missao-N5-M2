var Livro = require('./livro-schema')

const obterLivros = async () => { 
  return Livro.find()
};

const incluir = async (livro) => {
  return Livro.create(livro);
};

const excluir = async (codigo) => { 
  return Livro.deleteOne({ _id: codigo }) 
};

module.exports.obterLivros = obterLivros;
module.exports.incluir = incluir;
module.exports.excluir = excluir;


//======================================================================================

