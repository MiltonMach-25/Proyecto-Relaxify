const blogService = require('../services/blog.service');

exports.listar = async (req, res) => {
    try { res.status(200).json(await blogService.listar()); }
    catch (error) { res.status(500).json({ message: 'Error listar', error }); }
};
exports.nuevo = async (req, res) => {
    try { res.status(201).json(await blogService.nuevo(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error nuevo', error }); }
};
exports.editar = async (req, res) => {
    try { res.status(200).json(await blogService.editar(req.params.id, req.body)); }
    catch (error) { res.status(500).json({ message: 'Error editar', error }); }
};
exports.eliminar = async (req, res) => {
    try { res.status(200).json(await blogService.eliminar(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error eliminar', error }); }
};
exports.categorias = async (req, res) => {
    try { res.status(200).json(await blogService.categorias()); }
    catch (error) { res.status(500).json({ message: 'Error categorias', error }); }
};
exports.comentarios = async (req, res) => {
    try { res.status(200).json(await blogService.comentarios()); }
    catch (error) { res.status(500).json({ message: 'Error comentarios', error }); }
};