const express = require('express');
const router = express.Router();
const extrasController = require('../controllers/extras.controller');

router.get('/configuracion', extrasController.configuracion);
router.get('/ayuda', extrasController.ayuda);
router.post('/contacto', extrasController.contacto);
router.get('/politicas', extrasController.politicas);
router.get('/terminos', extrasController.terminos);
router.get('/actualizaciones', extrasController.actualizaciones);

module.exports = router;