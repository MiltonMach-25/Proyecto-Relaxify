const marketplaceService = require('../services/marketplace.service');

exports.listar = async (req, res) => {
    try { res.status(200).json(await marketplaceService.listar()); }
    catch (error) { res.status(500).json({ message: 'Error listar', error }); }
};
exports.nuevo = async (req, res) => {
    try { res.status(201).json(await marketplaceService.nuevo(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error nuevo', error }); }
};
exports.editar = async (req, res) => {
    try { res.status(200).json(await marketplaceService.editar(req.params.id, req.body)); }
    catch (error) { res.status(500).json({ message: 'Error editar', error }); }
};
exports.eliminar = async (req, res) => {
    try { res.status(200).json(await marketplaceService.eliminar(req.params.id)); }
    catch (error) { res.status(500).json({ message: 'Error eliminar', error }); }
};
exports.carrito = async (req, res) => {
    try { res.status(200).json(await marketplaceService.carrito()); }
    catch (error) { res.status(500).json({ message: 'Error carrito', error }); }
};
exports.pago = async (req, res) => {
    try { res.status(200).json(await marketplaceService.pago(req.body)); }
    catch (error) { res.status(500).json({ message: 'Error pago', error }); }
};
exports.historial = async (req, res) => {
    try { res.status(200).json(await marketplaceService.historial()); }
    catch (error) { res.status(500).json({ message: 'Error historial', error }); }
};