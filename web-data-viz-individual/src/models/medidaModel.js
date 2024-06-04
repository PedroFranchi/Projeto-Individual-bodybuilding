var database = require("../database/config");

function qtdPessoasCadastradas() {

    var instrucaoSql = `SELECT count(nome) as pessoas_cadastradas
                         FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function acertosUsuarios(idUsuario) {

    var instrucaoSql = `SELECT 
                            acertos as acertos_usuarios
                        FROM quiz
                        WHERE fkUsuario = ${idUsuario}
                        ORDER BY id DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterMaiorPontuacao(idUsuario) {

    var instrucaoSql = `SELECT 
                       max(acertos) as maior_pontuacao
                    FROM quiz
                    WHERE fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterMediaAcertosGeral() {

    var instrucaoSql = `SELECT
    avg(acertos) as media_acertos_geral
 FROM quiz;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterMediaAcertosUsuario(idUsuario) {

    var instrucaoSql = `SELECT
    avg(acertos) as media_acertos_usuario
 FROM quiz
 WHERE fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterMediaAcertosUsuario,
    qtdPessoasCadastradas,
    acertosUsuarios,
    obterMaiorPontuacao,
    obterMediaAcertosGeral
}
