const estadisticasService = require('../services/estadisticas.service');

exports.estres = async (req, res) => {
    try { res.status(200).json(await estadisticasService.estres()); }
    catch (error) { res.status(500).json({ message: 'Error estres', error }); }
};
exports.usuarios = async (req, res) => {
    try { res.status(200).json(await estadisticasService.usuarios()); }
    catch (error) { res.status(500).json({ message: 'Error usuarios', error }); }
};
exports.usuario = async (req, res) => {
    try { res.status(200).json(await estadisticasService.usuario(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error usuario', error }); }
};
exports.globales = async (req, res) => {
    try { res.status(200).json(await estadisticasService.globales()); }
    catch (error) { res.status(500).json({ message: 'Error globales', error }); }
};