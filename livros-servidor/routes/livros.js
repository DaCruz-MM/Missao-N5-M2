var livro_dao = require('../modelo/livro-dao')

var express = require('express');
var router = express.Router()

router.get('/', function(req,res){
    livro_dao.obterLivros()
        .then((user) => {
            res.json(user);
        })
});

router.post('/', function(req,res){
    let livro = req.body
    livro_dao.incluir(livro)
    .then((data) => {
          res.send({
            message: "Inclusao efetuada!",
          });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Não foi possível incluir o livro",
        });
      });
});

router.delete('/:id', function(req,res){
    let codigo = req.params.id
    livro_dao.excluir(codigo)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Não é possível excluir com id ${codigo}. Talvez o ID esteja errado`,
          });
        } else {
          res.send({
            message: "O produto foi excluído com sucesso!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Não foi possível excluir o livro com id " + codigo,
        });
      });
});

module.exports = router;