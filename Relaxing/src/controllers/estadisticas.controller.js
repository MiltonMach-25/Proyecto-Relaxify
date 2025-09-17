const estadisticasService = require('../services/estadisticas.service');

// Consultar estadísticas de estrés
exports.consultarEstres = async (req, res) => {
    try {
        const data = await estadisticasService.getEstres();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al consultar estadísticas de estrés", error });
    }
};

// Ver estadísticas generales de usuarios
exports.verUsuarios = async (req, res) => {
    try {
        const data = await estadisticasService.getUsuarios();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener estadísticas generales", error });
    }
};

// Progreso de un usuario específico
exports.verUsuario = async (req, res) => {
    try {
        const data = await estadisticasService.getUsuario(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al consultar progreso del usuario", error });
    }
};

// Estadísticas globales de estrés
exports.verGlobales = async (req, res) => {
    try {
        const data = await estadisticasService.getGlobales();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al consultar estadísticas globales", error });
    }
};

// Generar nuevo reporte
exports.crearReporte = async (req, res) => {
    try {
        const reporte = await estadisticasService.nuevoReporte(req.body);
        res.status(201).json(reporte);
    } catch (error) {
        res.status(500).json({ message: "Error al crear reporte", error });
    }
};

// Editar reporte
exports.editarReporte = async (req, res) => {
    try {
        const resultado = await estadisticasService.editarReporte(req.params.id, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al editar reporte", error });
    }
};

// Eliminar reporte
exports.eliminarReporte = async (req, res) => {
    try {
        const resultado = await estadisticasService.eliminarReporte(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar reporte", error });
    }
};

// Ver detalles de un reporte
exports.verReporte = async (req, res) => {
    try {
        const reporte = await estadisticasService.getReporte(req.params.id);
        res.status(200).json(reporte);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener detalles del reporte", error });
    }
};

// Descargar reporte en PDF
exports.descargarReporte = async (req, res) => {
    try {
        const reporte = await estadisticasService.descargarReporte(req.params.id);
        res.status(200).json(reporte);
    } catch (error) {
        res.status(500).json({ message: "Error al descargar reporte", error });
    }
};