const alertasService = require('../services/alertas.service');

// Crear nueva alerta
exports.crearAlerta = async (req, res) => {
    try {
        const alerta = await alertasService.nuevaAlerta(req.body);
        res.status(201).json(alerta);
    } catch (error) {
        res.status(500).json({ message: "Error al crear alerta", error });
    }
};

// Marcar alerta como resuelta
exports.resolverAlerta = async (req, res) => {
    try {
        const resultado = await alertasService.resolverAlerta(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al resolver alerta", error });
    }
};

// Eliminar alerta
exports.eliminarAlerta = async (req, res) => {
    try {
        const resultado = await alertasService.eliminarAlerta(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar alerta", error });
    }
};

// Consultar historial de alertas
exports.verHistorial = async (req, res) => {
    try {
        const historial = await alertasService.getHistorial();
        res.status(200).json(historial);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener historial de alertas", error });
    }
};