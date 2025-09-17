const extrasService = require('../services/extras.service');

// Acceder a configuraciones avanzadas
exports.getConfiguracion = async (req, res) => {
    try {
        const configuracion = await extrasService.getConfiguracion();
        res.status(200).json(configuracion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener configuraciones', error });
    }
};

// Centro de ayuda y soporte
exports.getAyuda = async (req, res) => {
    try {
        const ayuda = await extrasService.getAyuda();
        res.status(200).json(ayuda);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener ayuda', error });
    }
};

// Enviar consulta a soporte
exports.enviarConsulta = async (req, res) => {
    try {
        const resultado = await extrasService.enviarConsulta(req.body);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar consulta', error });
    }
};

// Ver políticas de privacidad
exports.getPoliticas = async (req, res) => {
    try {
        const politicas = await extrasService.getPoliticas();
        res.status(200).json(politicas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener políticas', error });
    }
};

// Ver términos y condiciones
exports.getTerminos = async (req, res) => {
    try {
        const terminos = await extrasService.getTerminos();
        res.status(200).json(terminos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener términos', error });
    }
};

// Ver actualizaciones recientes
exports.getActualizaciones = async (req, res) => {
    try {
        const actualizaciones = await extrasService.getActualizaciones();
        res.status(200).json(actualizaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener actualizaciones', error });
    }
};