const reportesService = require('../services/reportes.service');

// Generar un nuevo reporte
exports.nuevo = async (req, res) => {
    try {
        const reporte = await reportesService.nuevo(req.body);
        res.status(201).json(reporte);
    } catch (error) {
        res.status(500).json({ message: "Error al crear reporte", error });
    }
};

// Editar un reporte
exports.editar = async (req, res) => {
    try {
        const result = await reportesService.editar(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al editar reporte", error });
    }
};

// Eliminar un reporte
exports.eliminar = async (req, res) => {
    try {
        const result = await reportesService.eliminar(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar reporte", error });
    }
};

// Ver detalles de un reporte
exports.detalles = async (req, res) => {
    try {
        const detalle = await reportesService.detalles(req.params.id);
        res.status(200).json(detalle);
    } catch (error) {
        res.status(500).json({ message: "Error al consultar reporte", error });
    }
};

// Descargar reporte
exports.descargar = async (req, res) => {
    try {
        const reporte = await reportesService.descargar(req.params.id);
        res.status(200).json(reporte);
    } catch (error) {
        res.status(500).json({ message: "Error al descargar reporte", error });
    }
};