const express = require("express");
const router = express.Router();
const carroController = require("../controllers/carro.controller");

router.get("/listar", carroController.listarCarro);
router.get("/buscar/:id", carroController.buscarCarro);
router.post("/cadastrar", carroController.novoCarro);
router.put("/atualizar/:id", carroController.atualizarCarro);
router.delete("/excluir/:id", carroController.apagarCarro);

module.exports = router;