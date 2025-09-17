const express = require('express');
const router = express.Router();
const relaxController = require('../controllers/relax.controller');

router.get('/ejercicios', relaxController.verEjercicios);
router.post('/ejercicios/nuevo', relaxController.nuevoEjercicio);
router.put('/ejercicios/:id/editar', relaxController.editarEjercicio);
router.delete('/ejercicios/:id/eliminar', relaxController.eliminarEjercicio);
router.get('/musica', relaxController.verMusica);
router.get('/meditaciones', relaxController.verMeditaciones);
router.get('/respiracion', relaxController.verRespiracion);
router.get('/reto-30dias', relaxController.verReto30Dias);
router.get('/sesiones/:id', relaxController.verSesiones);
router.post('/sesiones/crear', relaxController.crearSesion);

module.exports = router;
