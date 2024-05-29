var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // var nome = req.body.nomeServer;
    // var email = req.body.emailServer;
    // var senha = req.body.senhaServer;

    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var usuarioid = req.body.usuarioidServer;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seus acertos estam undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seus erros estam undefined!");
    } else if (usuarioid == undefined) {
        res.status(400).send("Seu usuarioid está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrar(acertos, erros, usuarioid)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}