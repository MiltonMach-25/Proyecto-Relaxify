const comunidadService = require('../services/comunidad.service');

// Acceder a la comunidad Relaxify
exports.verComunidad = async (req, res) => {
    try {
        const data = await comunidadService.getComunidad();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al acceder a la comunidad", error });
    }
};

// Crear una nueva publicación
exports.crearPublicacion = async (req, res) => {
    try {
        const publicacion = await comunidadService.nuevaPublicacion(req.body);
        res.status(201).json(publicacion);
    } catch (error) {
        res.status(500).json({ message: "Error al crear publicación", error });
    }
};

// Ver comentarios de una publicación
exports.verComentarios = async (req, res) => {
    try {
        const comentarios = await comunidadService.getComentarios(req.params.id);
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener comentarios", error });
    }
};

// Ver grupos temáticos
exports.verGrupos = async (req, res) => {
    try {
        const grupos = await comunidadService.getGrupos();
        res.status(200).json(grupos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener grupos", error });
    }
};

// Unirse a un grupo
exports.unirse = async (req, res) => {
    try {
        const resultado = await comunidadService.unirseGrupo(req.params.id, req.body.usuarioId);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al unirse al grupo", error });
    }
};

// Salir de un grupo
exports.salir = async (req, res) => {
    try {
        const resultado = await comunidadService.salirGrupo(req.params.id, req.body.usuarioId);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al salir del grupo", error });
    }
};

// Reaccionar a una publicación
exports.reaccionar = async (req, res) => {
    try {
        const resultado = await comunidadService.reaccionarPublicacion(req.params.id, req.body.usuarioId, req.body.tipoReaccion);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: "Error al reaccionar a la publicación", error });
    }
};

// Ver mensajes privados
exports.verMensajes = async (req, res) => {
    try {
        const mensajes = await comunidadService.getMensajes(req.params.usuarioId);
        res.status(200).json(mensajes);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener mensajes", error });
    }
};