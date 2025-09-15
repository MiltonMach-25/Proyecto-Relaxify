const authService = require('../services/auth.service');

exports.login = async (req, res) => {
    try { res.status(200).json(await authService.login(req.body)); } 
    catch (error) { res.status(500).json({ message: 'Error login', error }); }
};
exports.register = async (req, res) => {
    try { res.status(201).json(await authService.register(req.body)); } 
    catch (error) { res.status(500).json({ message: 'Error register', error }); }
};
exports.logout = async (req, res) => {
    try { res.status(200).json(await authService.logout(req.params.id)); } 
    catch (error) { res.status(500).json({ message: 'Error logout', error }); }
};
exports.recuperar = async (req, res) => {
    try { res.status(200).json(await authService.recuperar(req.body.correo)); } 
    catch (error) { res.status(500).json({ message: 'Error recuperar', error }); }
};
exports.verificar = async (req, res) => {
    try { res.status(200).json(await authService.verificar(req.params.token)); } 
    catch (error) { res.status(500).json({ message: 'Error verificar', error }); }
};
exports.token = async (req, res) => {
    try { res.status(200).json(await authService.token(req.params.id)); } 
    catch (error) { res.status(500).json({ message: 'Error token', error }); }
};
exports.dispositivos = async (req, res) => {
    try { res.status(200).json(await authService.dispositivos(req.params.id)); } 
    catch (error) { res.status(500).json({ message: 'Error dispositivos', error }); }
};
exports.desvincular = async (req, res) => {
    try { res.status(200).json(await authService.desvincular(req.params.id)); } 
    catch (error) { res.status(500).json({ message: 'Error desvincular', error }); }
};