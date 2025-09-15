const extrasService = require('../services/extras.service');

exports.configuracion = async (req, res) => {
    try { res.status(200).json(await extrasService.configuracion()); }
    catch (error) { res.status(500).json({ message: 'Error configuracion', error }); }
};
exports.ayuda = async (req, res) => {
    try { res.status(200).json(await extrasService.ayuda()); }
    catch (error) { res.status(500).json({ message: 'Error ayuda', error }); }
};
exports.contacto = async (req, res) => {
    try { res.status(200).json(await extrasService.contacto(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error contacto', error }); }
};
exports.politicas = async (req, res) => {
    try { res.status(200).json(await extrasService.politicas()); }
    catch (error) { res.status(500).json({ message: 'Error politicas', error }); }
};
exports.terminos = async (req, res) => {
    try { res.status(200).json(await extrasService.terminos()); }
    catch (error) { res.status(500).json({ message: 'Error terminos', error }); }
};
exports.actualizaciones = async (req, res) => {
    try { res.status(200).json(await extrasService.actualizaciones()); }
    catch (error) { res.status(500).json({ message: 'Error actualizaciones', error }); }
};