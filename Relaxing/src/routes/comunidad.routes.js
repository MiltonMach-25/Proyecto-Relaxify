const express = require('express');
const router = express.Router();
const comunidadController = require('../controllers/comunidad.controller');

router.get('/', comunidadController.acceder);
router.post('/publicar', comunidadController.publicar);
router.get('/:id/comentarios', comunidadController.comentarios);
router.get('/grupos', comunidadController.grupos);
router.post('/grupo/:id/unirse', comunidadController.unirse);
router.delete('/grupo/:id/salir', comunidadController.salir);
router.put('/:id/reacciones', comunidadController.reaccionar);
router.get('/mensajes', comunidadController.mensajes);

module.exports = router;