const express = require('express');
const router = express.Router();
const reportesController = require('../controllers/reportes.controller');

router.post('/nuevo', reportesController.nuevoReporte);
router.put('/:id/editar', reportesController.editarReporte);
router.delete('/:id/eliminar', reportesController.eliminarReporte);
router.get('/:id/detalles', reportesController.detallesReporte);
router.get('/descargar/:id', reportesController.descargarReporte);

module.exports = router;