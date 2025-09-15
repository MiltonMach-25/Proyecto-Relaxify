const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventos.controller');

router.get('/', eventosController.listar);
router.post('/nuevo', eventosController.nuevo);
router.put('/:id/editar', eventosController.editar);
router.delete('/:id/eliminar', eventosController.eliminar);
router.post('/:id/inscribirse', eventosController.inscribirse);
router.delete('/:id/cancelar', eventosController.cancelar);
router.get('/calendario', eventosController.calendario);

module.exports = router;