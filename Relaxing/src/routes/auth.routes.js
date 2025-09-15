const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
router.post('/recuperar', authController.recuperar);
router.get('/verificar', authController.verificar);
router.get('/token', authController.token);
router.get('/dispositivos', authController.dispositivos);
router.delete('/desvincular', authController.desvincular);

module.exports = router;