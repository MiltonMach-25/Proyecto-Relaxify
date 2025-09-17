const express = require('express');
const router = express.Router();
const marketplaceController = require('../controllers/marketplace.controller');

router.get('/', marketplaceController.findAll);
router.get('/:id', marketplaceController.findById);
router.post('/nuevo', marketplaceController.create);
router.put('/:id/editar', marketplaceController.update);
router.delete('/:id/eliminar', marketplaceController.remove);

router.get('/carrito', marketplaceController.carrito);
router.post('/pago', marketplaceController.pago);
router.get('/historial/:userId', marketplaceController.historial);

module.exports = router;