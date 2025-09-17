const blogService = require('../services/blog.service');

// Ver artículos del blog
exports.verArticulos = async (req, res) => {
    try {
        const articulos = await blogService.getArticulos();
        res.status(200).json(articulos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener artículos", error });
    }
};

// Crear un nuevo artículo
exports.crearArticulo = async (req, res) => {
    try {
        const articulo = await blogService.nuevoArticulo(req.body);
        res.status(201).json(articulo);
    } catch (error) {
        res.status(500).json({ message: "Error al crear artículo", error });
    }
};

// Editar un artículo
exports.editarArticulo = async (req, res) => {
    try {
        const resultado = await blogService.editarArticulo(req.params.id, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al editar artículo", error });
    }
};

// Eliminar un artículo
exports.eliminarArticulo = async (req, res) => {
    try {
        const resultado = await blogService.eliminarArticulo(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar artículo", error });
    }
};

// Ver categorías del blog
exports.verCategorias = async (req, res) => {
    try {
        const categorias = await blogService.getCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categorías", error });
    }
};

// Ver comentarios del blog
exports.verComentarios = async (req, res) => {
    try {
        const comentarios = await blogService.getComentarios();
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener comentarios", error });
    }
};