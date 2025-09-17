const express = require('express');
const router = express.Router();
const alertasController = require('../controllers/alertas.controller');

router.post('/nueva', alertasController.crearAlerta);
router.put('/:id/resolver', alertasController.resolverAlerta);
router.delete('/:id/eliminar', alertasController.eliminarAlerta);
router.get('/', alertasController.verHistorial);

module.exports = router;