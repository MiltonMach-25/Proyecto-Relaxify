const express = require('express');
const router = express.Router();
const innovacionController = require('../controllers/innovacion.controller');

router.get('/viajes-bienestar', innovacionController.viajesBienestar);
router.get('/experiencias-vr', innovacionController.experienciasVR);
router.get('/asistente-ia/:userId', innovacionController.asistenteIA);
router.get('/nuevas-funciones', innovacionController.nuevasFunciones);
router.post('/laboratorio', innovacionController.laboratorio);

module.exports = router;