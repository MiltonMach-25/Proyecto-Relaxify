const express = require('express');
const router = express.Router();
const marketplaceController = require('../controllers/marketplace.controller');

router.get('/', marketplaceController.listar);
router.post('/nuevo', marketplaceController.nuevo);
router.put('/:id/editar', marketplaceController.editar);
router.delete('/:id/eliminar', marketplaceController.eliminar);
router.get('/carrito', marketplaceController.carrito);
router.post('/pago', marketplaceController.pago);
router.get('/historial', marketplaceController.historial);

module.exports = router;
