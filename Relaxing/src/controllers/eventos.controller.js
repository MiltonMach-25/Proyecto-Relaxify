const eventosService = require('../services/eventos.service');

// Listar todos los eventos
exports.findAll = async (req, res) => {
    try {
        const eventos = await eventosService.findAll();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener eventos', error });
    }
};

// Buscar evento por ID
exports.findById = async (req, res) => {
    try {
        const evento = await eventosService.findById(req.params.id);
        res.status(200).json(evento);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar evento', error });
    }
};

// Crear un nuevo evento
exports.create = async (req, res) => {
    try {
        const evento = await eventosService.create(req.body);
        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear evento', error });
    }
};

// Editar un evento
exports.update = async (req, res) => {
    try {
        const resultado = await eventosService.update(req.params.id, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar evento', error });
    }
};

// Eliminar un evento
exports.remove = async (req, res) => {
    try {
        const resultado = await eventosService.remove(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar evento', error });
    }
};

// Inscribirse a un evento
exports.inscribirse = async (req, res) => {
    try {
        const resultado = await eventosService.inscribirse(req.params.id, req.body.userId);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al inscribirse', error });
    }
};

// Cancelar inscripción a un evento
exports.cancelar = async (req, res) => {
    try {
        const resultado = await eventosService.cancelar(req.params.id, req.body.userId);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al cancelar inscripción', error });
    }
};

// Ver calendario de eventos
exports.calendario = async (req, res) => {
    try {
        const calendario = await eventosService.calendario();
        res.status(200).json(calendario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener calendario', error });
    }
};