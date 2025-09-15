const express = require('express');
const router = express.Router();
const conductorController = require('../controllers/conductor.controller');

router.get('/estado', conductorController.estado);
router.get('/historial', conductorController.historial);
router.put('/configuracion', conductorController.configuracion);
router.post('/activacion', conductorController.activar);
router.get('/descanso', conductorController.descanso);
router.get('/ruta-segura', conductorController.rutaSegura);

module.exports = router;