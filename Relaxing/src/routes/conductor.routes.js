const express = require('express');
const router = express.Router();
const conductorController = require('../controllers/conductor.controller');

router.get('/estado/:id', conductorController.verEstado);
router.get('/historial/:id', conductorController.verHistorial);
router.put('/configuracion/:id', conductorController.actualizarConfiguracion);
router.post('/activacion/:id', conductorController.activarModo);
router.get('/descanso/:id', conductorController.verDescanso);
router.get('/ruta-segura', conductorController.verRutaSegura);

module.exports = router;