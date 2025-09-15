const reportesService = require('../services/reportes.service');

exports.nuevoReporte = async (req, res) => {
    try { res.status(201).json(await reportesService.nuevoReporte(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error nuevoReporte', error }); }
};
exports.editarReporte = async (req, res) => {
    try { res.status(200).json(await reportesService.editarReporte(req.params.id, req.body)); }
    catch (error) { res.status(500).json({ message: 'Error editarReporte', error }); }
};
exports.eliminarReporte = async (req, res) => {
    try { res.status(200).json(await reportesService.eliminarReporte(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error eliminarReporte', error }); }
};
exports.detallesReporte = async (req, res) => {
    try { res.status(200).json(await reportesService.detallesReporte(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error detallesReporte', error }); }
};
exports.descargarReporte = async (req, res) => {
    try { res.status(200).json(await reportesService.descargarReporte(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error descargarReporte', error }); } 
};