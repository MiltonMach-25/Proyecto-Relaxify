const datosService = require('../services/datos.service');

exports.listarDatos = async (req, res) => {
    try { res.status(200).json(await datosService.listarDatos()); } 
    catch (error) { res.status(500).json({ message: 'Error listarDatos', error }); }
};
exports.subirDatos = async (req, res) => {
    try { res.status(201).json(await datosService.subirDatos(req.body)); } 
    catch (error) { res.status(500).json({ message: 'Error subirDatos', error }); }
};
exports.editarDato = async (req, res) => {
    try { res.status(200).json(await datosService.editarDato(req.params.id, req.body)); } 
    catch (error) { res.status(500).json({ message: 'Error editarDato', error }); }
};
exports.eliminarDato = async (req, res) => {
    try { res.status(200).json(await datosService.eliminarDato(req.params.id)); } 
    catch (error) { res.status(500).json({ message: 'Error eliminarDato', error }); }
};
exports.analisisIA = async (req, res) => {
    try { res.status(200).json(await datosService.analisisIA()); } 
    catch (error) { res.status(500).json({ message: 'Error analisisIA', error }); }
};
exports.historialRitmo = async (req, res) => {
    try { res.status(200).json(await datosService.historialRitmo()); } 
    catch (error) { res.status(500).json({ message: 'Error historialRitmo', error }); }
};
exports.compararRegistros = async (req, res) => {
    try { res.status(200).json(await datosService.compararRegistros()); } 
    catch (error) { res.status(500).json({ message: 'Error compararRegistros', error }); }
};
exports.tendencias = async (req, res) => {
    try { res.status(200).json(await datosService.tendencias()); } 
    catch (error) { res.status(500).json({ message: 'Error tendencias', error }); }
};
exports.recomendaciones = async (req, res) => {
    try { res.status(200).json(await datosService.recomendaciones()); } 
    catch (error) { res.status(500).json({ message: 'Error recomendaciones', error }); }
};
exports.exportar = async (req, res) => {
    try { res.status(200).json(await datosService.exportar()); } 
    catch (error) { res.status(500).json({ message: 'Error exportar', error }); } 
};