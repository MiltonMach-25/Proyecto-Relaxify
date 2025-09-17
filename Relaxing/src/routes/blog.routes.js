const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

router.get('/', blogController.verArticulos);
router.post('/nuevo', blogController.crearArticulo);
router.put('/:id/editar', blogController.editarArticulo);
router.delete('/:id/eliminar', blogController.eliminarArticulo);
router.get('/categorias', blogController.verCategorias);
router.get('/comentarios', blogController.verComentarios);

module.exports = router;