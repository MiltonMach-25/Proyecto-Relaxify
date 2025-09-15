const express = require('express');
const router = express.Router();
const alertasController = require('../controllers/alertas.controller');

router.post('/nueva', alertasController.nuevaAlerta);
router.put('/:id/resolver', alertasController.resolver);
router.delete('/:id/eliminar', alertasController.eliminar);
router.get('/', alertasController.historial);

module.exports = router;