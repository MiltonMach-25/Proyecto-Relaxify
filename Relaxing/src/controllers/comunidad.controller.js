const comunidadService = require('../services/comunidad.service');

exports.acceder = async (req, res) => {
    try { res.status(200).json(await comunidadService.acceder()); }
    catch (error) { res.status(500).json({ message: 'Error acceder', error }); }
};
exports.publicar = async (req, res) => {
    try { res.status(201).json(await comunidadService.publicar(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error publicar', error }); }
};
exports.comentarios = async (req, res) => {
    try { res.status(200).json(await comunidadService.comentarios(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error comentarios', error }); }
};
exports.grupos = async (req, res) => {
    try { res.status(200).json(await comunidadService.grupos()); }
    catch (error) { res.status(500).json({ message: 'Error grupos', error }); }
};
exports.unirse = async (req, res) => {
    try { res.status(200).json(await comunidadService.unirse(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error unirse', error }); }
};
exports.salir = async (req, res) => {
    try { res.status(200).json(await comunidadService.salir(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error salir', error }); }
};
exports.reaccionar = async (req, res) => {
    try { res.status(200).json(await comunidadService.reaccionar(req.params.id, req.body)); }
    catch (error) { res.status(500).json({ message: 'Error reaccionar', error }); }
};
exports.mensajes = async (req, res) => {
    try { res.status(200).json(await comunidadService.mensajes()); }
    catch (error) { res.status(500).json({ message: 'Error mensajes', error }); } 
};