const conductorService = require('../services/conductor.service');

exports.estado = async (req, res) => {
    try { res.status(200).json(await conductorService.estado()); }
    catch (error) { res.status(500).json({ message: 'Error estado', error }); }
};
exports.historial = async (req, res) => {
    try { res.status(200).json(await conductorService.historial()); }
    catch (error) { res.status(500).json({ message: 'Error historial', error }); }
};
exports.configuracion = async (req, res) => {
    try { res.status(200).json(await conductorService.configuracion(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error configuracion', error }); }
};
exports.activar = async (req, res) => {
    try { res.status(201).json(await conductorService.activar()); }
    catch (error) { res.status(500).json({ message: 'Error activar', error }); }
};
exports.descanso = async (req, res) => {
    try { res.status(200).json(await conductorService.descanso()); }
    catch (error) { res.status(500).json({ message: 'Error descanso', error }); }
};
exports.rutaSegura = async (req, res) => {
    try { res.status(200).json(await conductorService.rutaSegura()); }
    catch (error) { res.status(500).json({ message: 'Error rutaSegura', error }); }
};