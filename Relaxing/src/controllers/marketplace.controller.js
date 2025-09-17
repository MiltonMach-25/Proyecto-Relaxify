const marketplaceService = require('../services/marketplace.service');

// Listar productos
exports.findAll = async (req, res) => {
    try {
        const productos = await marketplaceService.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};

// Buscar producto por ID
exports.findById = async (req, res) => {
    try {
        const producto = await marketplaceService.findById(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar producto', error });
    }
};

// Publicar producto
exports.create = async (req, res) => {
    try {
        const producto = await marketplaceService.create(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto', error });
    }
};

// Editar producto
exports.update = async (req, res) => {
    try {
        const resultado = await marketplaceService.update(req.params.id, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar producto', error });
    }
};

// Eliminar producto
exports.remove = async (req, res) => {
    try {
        const resultado = await marketplaceService.remove(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto', error });
    }
};

// Ver carrito de compras
exports.carrito = async (req, res) => {
    try {
        const carrito = await marketplaceService.carrito(req.body.userId);
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener carrito', error });
    }
};

// Procesar pago
exports.pago = async (req, res) => {
    try {
        const resultado = await marketplaceService.pago(req.body.userId, req.body.total);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al procesar pago', error });
    }
};

// Historial de compras
exports.historial = async (req, res) => {
    try {
        const compras = await marketplaceService.historial(req.params.userId);
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener historial', error });
    }
};