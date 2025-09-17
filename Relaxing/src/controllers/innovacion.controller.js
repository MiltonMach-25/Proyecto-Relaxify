const innovacionService = require('../services/innovacion.service');

// Explorar destinos de relajación
exports.viajesBienestar = async (req, res) => {
    try {
        const destinos = await innovacionService.viajesBienestar();
        res.status(200).json(destinos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener destinos', error });
    }
};

// Acceder a experiencias en VR
exports.experienciasVR = async (req, res) => {
    try {
        const experiencias = await innovacionService.experienciasVR();
        res.status(200).json(experiencias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener experiencias VR', error });
    }
};

// Interactuar con asistente IA
exports.asistenteIA = async (req, res) => {
    try {
        const respuesta = await innovacionService.asistenteIA(req.params.userId);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ message: 'Error al interactuar con asistente IA', error });
    }
};

// Consultar novedades
exports.nuevasFunciones = async (req, res) => {
    try {
        const novedades = await innovacionService.nuevasFunciones();
        res.status(200).json(novedades);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener novedades', error });
    }
};

// Probar funciones experimentales (laboratorio)
exports.laboratorio = async (req, res) => {
    try {
        const resultado = await innovacionService.laboratorio(req.body);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al probar función experimental', error });
    }
};
