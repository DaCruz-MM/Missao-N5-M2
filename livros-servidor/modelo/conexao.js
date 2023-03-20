var banco = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/livraria'
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

banco.connect(url,options);

banco.Promise = global.Promise;

module.exports = banco;