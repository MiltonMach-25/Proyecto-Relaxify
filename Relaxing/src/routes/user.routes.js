
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Rutas de autenticación y usuario
router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/logout/:id', userController.logout);
router.post('/recuperar', userController.recuperar);
router.get('/verificar/:token', userController.verificar);
router.get('/token/:id', userController.token);

// Rutas de dispositivos
router.get('/dispositivos/:id', userController.dispositivos);
router.delete('/desvincular/:id', userController.desvincular);

module.exports = router;