const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.controller");

router.get("/listar/cliente", clienteController.listarCliente);
router.get("/buscar/cliente/:id", clienteController.buscarCliente);
router.post("/cadastrar/cliente", clienteController.novoCliente);
router.put("/atualizar/cliente/:id", clienteController.atualizarCliente);
router.delete("/apagar/cliente/:id", clienteController.apagarCliente);

module.exports = router;