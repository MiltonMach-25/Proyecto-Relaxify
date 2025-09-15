const alertasService = require('../services/alertas.service');

exports.nuevaAlerta = async (req, res) => {
    try { res.status(201).json(await alertasService.nuevaAlerta(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error nuevaAlerta', error }); }
};
exports.resolver = async (req, res) => {
    try { res.status(200).json(await alertasService.resolver(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error resolver', error }); }
};
exports.eliminar = async (req, res) => {
    try { res.status(200).json(await alertasService.eliminar(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error eliminar', error }); }
};
exports.historial = async (req, res) => {
    try { res.status(200).json(await alertasService.historial()); }
    catch (error) { res.status(500).json({ message: 'Error historial', error }); }
};