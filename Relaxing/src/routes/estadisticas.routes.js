const express = require('express');
const router = express.Router();
const estadisticasController = require('../controllers/estadisticas.controller');

router.get('/estres', estadisticasController.estres);
router.get('/usuarios', estadisticasController.usuarios);
router.get('/usuario/:id', estadisticasController.usuario);
router.get('/globales', estadisticasController.globales);

router.post('/reportes/nuevo', estadisticasController.nuevoReporte);
router.put('/reportes/:id/editar', estadisticasController.editarReporte);
router.delete('/reportes/:id/eliminar', estadisticasController.eliminarReporte);
router.get('/reportes/:id/detalles', estadisticasController.detallesReporte);
router.get('/reportes/descargar/:id', estadisticasController.descargarReporte);

module.exports = router;