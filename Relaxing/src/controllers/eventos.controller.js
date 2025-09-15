const eventosService = require('../services/eventos.service');

exports.listar = async (req, res) => {
    try { res.status(200).json(await eventosService.listar()); }
    catch (error) { res.status(500).json({ message: 'Error listar', error }); }
};
exports.nuevo = async (req, res) => {
    try { res.status(201).json(await eventosService.nuevo(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error nuevo', error }); }
};
exports.editar = async (req, res) => {
    try { res.status(200).json(await eventosService.editar(req.params.id, req.body)); }
    catch (error) { res.status(500).json({ message: 'Error editar', error }); }
};
exports.eliminar = async (req, res) => {
    try { res.status(200).json(await eventosService.eliminar(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error eliminar', error }); }
};
exports.inscribirse = async (req, res) => {
    try { res.status(200).json(await eventosService.inscribirse(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error inscribirse', error }); }
};
exports.cancelar = async (req, res) => {
    try { res.status(200).json(await eventosService.cancelar(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error cancelar', error }); }
};
exports.calendario = async (req, res) => {
    try { res.status(200).json(await eventosService.calendario()); }
    catch (error) { res.status(500).json({ message: 'Error calendario', error }); }
};