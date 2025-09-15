const express = require('express');
const router = express.Router();
const innovacionController = require('../controllers/innovacion.controller');

router.get('/viajes-bienestar', innovacionController.viajes);
router.get('/experiencias-vr', innovacionController.experienciasVR);
router.get('/asistente-ia', innovacionController.asistenteIA);
router.get('/nuevas-funciones', innovacionController.novedades);
router.post('/laboratorio', innovacionController.laboratorio);

module.exports = router;