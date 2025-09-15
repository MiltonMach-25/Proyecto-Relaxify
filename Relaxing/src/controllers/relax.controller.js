const relaxService = require('../services/relax.service');

exports.verEjercicios = async (req, res) => {
    try { res.status(200).json(await relaxService.verEjercicios()); } 
    catch (error) { res.status(500).json({ message: 'Error verEjercicios', error }); }
};
exports.nuevoEjercicio = async (req, res) => {
    try { res.status(201).json(await relaxService.nuevoEjercicio(req.body)); } 
    catch (error) { res.status(500).json({ message: 'Error nuevoEjercicio', error }); }
};
exports.editarEjercicio = async (req, res) => {
    try { res.status(200).json(await relaxService.editarEjercicio(req.params.id, req.body)); } 
    catch (error) { res.status(500).json({ message: 'Error editarEjercicio', error }); }
};
exports.eliminarEjercicio = async (req, res) => {
    try { res.status(200).json(await relaxService.eliminarEjercicio(req.params.id)); } 
    catch (error) { res.status(500).json({ message: 'Error eliminarEjercicio', error }); }
};
exports.musica = async (req, res) => {
    try { res.status(200).json(await relaxService.musica()); } 
    catch (error) { res.status(500).json({ message: 'Error musica', error }); }
};
exports.meditaciones = async (req, res) => {
    try { res.status(200).json(await relaxService.meditaciones()); } 
    catch (error) { res.status(500).json({ message: 'Error meditaciones', error }); }
};
exports.respiracion = async (req, res) => {
    try { res.status(200).json(await relaxService.respiracion()); } 
    catch (error) { res.status(500).json({ message: 'Error respiracion', error }); }
};
exports.reto30Dias = async (req, res) => {
    try { res.status(200).json(await relaxService.reto30Dias()); } 
    catch (error) { res.status(500).json({ message: 'Error reto30Dias', error }); }
};
exports.historialSesiones = async (req, res) => {
    try { res.status(200).json(await relaxService.historialSesiones()); } 
    catch (error) { res.status(500).json({ message: 'Error historialSesiones', error }); }
};
exports.crearSesion = async (req, res) => {
    try { res.status(201).json(await relaxService.crearSesion(req.body)); } 
    catch (error) { res.status(500).json({ message: 'Error crearSesion', error }); }
};