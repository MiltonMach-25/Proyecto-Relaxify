const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

router.get('/', blogController.listar);
router.post('/nuevo', blogController.nuevo);
router.put('/:id/editar', blogController.editar);
router.delete('/:id/eliminar', blogController.eliminar);
router.get('/categorias', blogController.categorias);
router.get('/comentarios', blogController.comentarios);

module.exports = router;