const datosService = require('../services/datos.service');

// Listar todos los registros biométricos
exports.listarDatos = async (req, res) => {
    try {
        const datos = await datosService.getAllDatos();
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener registros biométricos", error });
    }
};

// Subir datos desde smartwatch
exports.subirDatos = async (req, res) => {
    try {
        const nuevoDato = await datosService.subirDatos(req.body);
        res.status(201).json(nuevoDato);
    } catch (error) {
        res.status(500).json({ message: "Error al subir datos", error });
    }
};

// Editar registro biométrico
exports.editarDato = async (req, res) => {
    try {
        const actualizado = await datosService.updateDato(req.params.id, req.body);
        if (!actualizado.actualizado) return res.status(404).json({ message: "Registro no encontrado" });
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar registro", error });
    }
};

// Eliminar registro biométrico
exports.eliminarDato = async (req, res) => {
    try {
        const eliminado = await datosService.deleteDato(req.params.id);
        if (!eliminado.eliminado) return res.status(404).json({ message: "Registro no encontrado" });
        res.status(200).json(eliminado);
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar registro", error });
    }
};

// Ver análisis automático de IA
exports.verAnalisis = async (req, res) => {
    try {
        const analisis = await datosService.getAnalisis(req.params.id);
        res.status(200).json(analisis);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener análisis", error });
    }
};

// Consultar historial de ritmo cardíaco
exports.verRitmo = async (req, res) => {
    try {
        const ritmo = await datosService.getRitmo(req.params.id);
        res.status(200).json(ritmo);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener historial de ritmo", error });
    }
};

// Comparar registros de distintos días
exports.compararDatos = async (req, res) => {
    try {
        const { fecha1, fecha2 } = req.query;
        const comparacion = await datosService.compararDatos(req.params.id, { fecha1, fecha2 });
        res.status(200).json(comparacion);
    } catch (error) {
        res.status(500).json({ message: "Error al comparar registros", error });
    }
};

// Mostrar tendencias de salud
exports.verTendencias = async (req, res) => {
    try {
        const tendencias = await datosService.getTendencias(req.params.id);
        res.status(200).json(tendencias);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tendencias", error });
    }
};

// Ver recomendaciones personalizadas
exports.verRecomendaciones = async (req, res) => {
    try {
        const recomendaciones = await datosService.getRecomendaciones(req.params.id);
        res.status(200).json(recomendaciones);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener recomendaciones", error });
    }
};

// Descargar datos
exports.exportarDatos = async (req, res) => {
    try {
        const datos = await datosService.exportarDatos(req.params.id);
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({ message: "Error al exportar datos", error });
    }
};