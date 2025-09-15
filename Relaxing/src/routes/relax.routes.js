const express = require('express');
const router = express.Router();
const relaxController = require('../controllers/relax.controller');

router.get('/ejercicios', relaxController.verEjercicios);
router.post('/ejercicios/nuevo', relaxController.nuevoEjercicio);
router.put('/ejercicios/:id/editar', relaxController.editarEjercicio);
router.delete('/ejercicios/:id/eliminar', relaxController.eliminarEjercicio);
router.get('/musica', relaxController.musica);
router.get('/meditaciones', relaxController.meditaciones);
router.get('/respiracion', relaxController.respiracion);
router.get('/reto-30dias', relaxController.reto30Dias);
router.get('/sesiones', relaxController.historialSesiones);
router.post('/sesiones/crear', relaxController.crearSesion);

module.exports = router;