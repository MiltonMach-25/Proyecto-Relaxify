const innovacionService = require('../services/innovacion.service');

exports.viajes = async (req, res) => {
    try { res.status(200).json(await innovacionService.viajes()); }
    catch (error) { res.status(500).json({ message: 'Error viajes', error }); }
};
exports.experienciasVR = async (req, res) => {
    try { res.status(200).json(await innovacionService.experienciasVR()); }
    catch (error) { res.status(500).json({ message: 'Error experienciasVR', error }); }
};
exports.asistenteIA = async (req, res) => {
    try { res.status(200).json(await innovacionService.asistenteIA()); }
    catch (error) { res.status(500).json({ message: 'Error asistenteIA', error }); }
};
exports.novedades = async (req, res) => {
    try { res.status(200).json(await innovacionService.novedades()); }
    catch (error) { res.status(500).json({ message: 'Error novedades', error }); }
};
exports.laboratorio = async (req, res) => {
    try { res.status(201).json(await innovacionService.laboratorio(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error laboratorio', error }); }
};