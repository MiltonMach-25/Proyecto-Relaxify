const express = require('express');
const router = express.Router();
const datosController = require('../controllers/datos.controller');

router.get('/', datosController.listarDatos);
router.post('/subir', datosController.subirDatos);
router.put('/:id/editar', datosController.editarDato);
router.delete('/:id/eliminar', datosController.eliminarDato);
router.get('/analisis/:id', datosController.verAnalisis);
router.get('/ritmo/:id', datosController.verRitmo);
router.get('/comparar/:id', datosController.compararDatos);
router.get('/tendencias/:id', datosController.verTendencias);
router.get('/recomendaciones/:id', datosController.verRecomendaciones);
router.get('/exportar/:id', datosController.exportarDatos);

module.exports = router;
