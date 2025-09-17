const express = require('express');
const router = express.Router();
const comunidadController = require('../controllers/comunidad.controller');

router.get('/', comunidadController.verComunidad);
router.post('/publicar', comunidadController.crearPublicacion);
router.get('/:id/comentarios', comunidadController.verComentarios);
router.get('/grupos', comunidadController.verGrupos);
router.post('/grupo/:id/unirse', comunidadController.unirse);
router.delete('/grupo/:id/salir', comunidadController.salir);
router.put('/:id/reacciones', comunidadController.reaccionar);
router.get('/mensajes/:usuarioId', comunidadController.verMensajes);

module.exports = router;