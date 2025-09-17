const express = require('express');
const router = express.Router();
const estadisticasController = require('../controllers/estadisticas.controller');

router.get('/estres', estadisticasController.consultarEstres);
router.get('/usuarios', estadisticasController.verUsuarios);
router.get('/usuario/:id', estadisticasController.verUsuario);
router.get('/globales', estadisticasController.verGlobales);

router.post('/reportes/nuevo', estadisticasController.crearReporte);
router.put('/reportes/:id/editar', estadisticasController.editarReporte);
router.delete('/reportes/:id/eliminar', estadisticasController.eliminarReporte);
router.get('/reportes/:id/detalles', estadisticasController.verReporte);
router.get('/reportes/descargar/:id', estadisticasController.descargarReporte);

module.exports = router;