const express = require('express');
const router = express.Router();
const datosController = require('../controllers/datos.controller');

router.get('/', datosController.listarDatos);
router.post('/subir', datosController.subirDatos);
router.put('/:id/editar', datosController.editarDato);
router.delete('/:id/eliminar', datosController.eliminarDato);
router.get('/analisis', datosController.analisisIA);
router.get('/ritmo', datosController.historialRitmo);
router.get('/comparar', datosController.compararRegistros);
router.get('/tendencias', datosController.tendencias);
router.get('/recomendaciones', datosController.recomendaciones);
router.get('/exportar', datosController.exportar);

module.exports = router;