const relaxService = require('../services/relax.service');

// Ver ejercicios de relajación
exports.verEjercicios = async (req, res) => {
    try {
        const ejercicios = await relaxService.findAllEjercicios();
        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener ejercicios", error });
    }
};

// Crear un nuevo ejercicio
exports.nuevoEjercicio = async (req, res) => {
    try {
        const ejercicio = await relaxService.createEjercicio(req.body);
        res.status(201).json(ejercicio);
    } catch (error) {
        res.status(500).json({ message: "Error al crear ejercicio", error });
    }
};

// Editar ejercicio
exports.editarEjercicio = async (req, res) => {
    try {
        const actualizado = await relaxService.updateEjercicio(req.params.id, req.body);
        if (!actualizado) return res.status(404).json({ message: "Ejercicio no encontrado" });
        res.status(200).json({ message: "Ejercicio actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar ejercicio", error });
    }
};

// Eliminar ejercicio
exports.eliminarEjercicio = async (req, res) => {
    try {
        const eliminado = await relaxService.removeEjercicio(req.params.id);
        if (!eliminado) return res.status(404).json({ message: "Ejercicio no encontrado" });
        res.status(200).json({ message: "Ejercicio eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar ejercicio", error });
    }
};

// Escuchar música relajante
exports.verMusica = async (req, res) => {
    try {
        const musica = await relaxService.getMusica();
        res.status(200).json(musica);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener música", error });
    }
};

// Ver meditaciones guiadas
exports.verMeditaciones = async (req, res) => {
    try {
        const meditaciones = await relaxService.getMeditaciones();
        res.status(200).json(meditaciones);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener meditaciones", error });
    }
};

// Acceder a ejercicios de respiración
exports.verRespiracion = async (req, res) => {
    try {
        const ejercicios = await relaxService.getRespiracion();
        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener ejercicios de respiración", error });
    }
};

// Participar en reto de 30 días
exports.verReto30Dias = async (req, res) => {
    try {
        const reto = await relaxService.getReto30Dias();
        res.status(200).json(reto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener reto", error });
    }
};

// Consultar historial de sesiones
exports.verSesiones = async (req, res) => {
    try {
        const sesiones = await relaxService.getSesiones(req.params.id);
        res.status(200).json(sesiones);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener sesiones", error });
    }
};

// Generar sesión personalizada
exports.crearSesion = async (req, res) => {
    try {
        const sesion = await relaxService.createSesion(req.body);
        res.status(201).json(sesion);
    } catch (error) {
        res.status(500).json({ message: "Error al crear sesión", error });
    }
};