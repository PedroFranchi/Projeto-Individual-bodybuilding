var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idusuario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idUsuario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })


router.get("/acertosUsuarios/:idUsuario", function (req, res) {
    medidaController.acertosUsuarios(req, res);
  })

  router.get("/obterMaiorPontuacao/:idUsuario", function (req, res) {
    medidaController.obterMaiorPontuacao(req, res);
  })

  router.get("/qtdPessoasCadastradas", function (req, res) {
    medidaController.qtdPessoasCadastradas(req, res);
  })

  router.get("/mediaAcertosUsuario/:idUsuario", function (req, res) {
    medidaController.mediaAcertosUsuario(req, res);
  })

  router.get("/obterMediaAcertosGeral", function (req, res) {
    medidaController.obterMediaAcertosGeral(req, res);
  })

// router.get("/quiz/:idUsuario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;