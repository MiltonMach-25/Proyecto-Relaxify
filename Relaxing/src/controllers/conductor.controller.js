const conductorService = require('../services/conductor.service');

// Ver estado actual del conductor
exports.verEstado = async (req, res) => {
    try {
        const estado = await conductorService.getEstado(req.params.id);
        res.status(200).json(estado);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener estado del conductor", error });
    }
};

// Consultar historial de alertas
exports.verHistorial = async (req, res) => {
    try {
        const historial = await conductorService.getHistorial(req.params.id);
        res.status(200).json(historial);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener historial de alertas", error });
    }
};

// Ajustar configuración de conducción
exports.actualizarConfiguracion = async (req, res) => {
    try {
        const actualizado = await conductorService.actualizarConfiguracion(req.params.id, req.body);
        res.status(200).json(actualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar configuración", error });
    }
};

// Activar modo conducción segura
exports.activarModo = async (req, res) => {
    try {
        const activado = await conductorService.activarModo(req.params.id);
        res.status(200).json(activado);
    } catch (error) {
        res.status(500).json({ message: "Error al activar modo seguro", error });
    }
};

// Recomendaciones de descanso
exports.verDescanso = async (req, res) => {
    try {
        const descanso = await conductorService.getDescanso(req.params.id);
        res.status(200).json(descanso);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener recomendaciones de descanso", error });
    }
};

// Mostrar rutas seguras
exports.verRutaSegura = async (req, res) => {
    try {
        const rutas = await conductorService.getRutaSegura();
        res.status(200).json(rutas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener rutas seguras", error });
    }
};