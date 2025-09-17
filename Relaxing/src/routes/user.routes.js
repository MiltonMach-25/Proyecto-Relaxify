
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.listarUsuarios);
router.get('/:id', usersController.perfilUsuario);
router.put('/:id/update', usersController.actualizarUsuario);
router.delete('/:id/remove', usersController.eliminarUsuario);
router.get('/:id/preferencias', usersController.verPreferencias);
router.put('/:id/notificaciones', usersController.configurarNotificaciones);
router.get('/:id/conexiones', usersController.verConexiones);
router.put('/:id/estado', usersController.actualizarEstado);

module.exports = router;