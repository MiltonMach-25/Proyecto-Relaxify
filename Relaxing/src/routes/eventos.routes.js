const express = require('express');
const router = express.Router();
const extrasController = require('../controllers/extras.controller');

router.get('/configuracion', extrasController.getConfiguracion);
router.get('/ayuda', extrasController.getAyuda);
router.post('/contacto', extrasController.enviarConsulta);
router.get('/politicas', extrasController.getPoliticas);
router.get('/terminos', extrasController.getTerminos);
router.get('/actualizaciones', extrasController.getActualizaciones);

module.exports = router;