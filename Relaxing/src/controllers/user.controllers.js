const usersService = require('../services/users.service');

// Listar todos los usuarios
exports.listarUsuarios = async (req, res) => {
    try {
        const users = await usersService.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
};

// Consultar perfil de usuario
exports.perfilUsuario = async (req, res) => {
    try {
        const user = await usersService.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al consultar perfil", error });
    }
};

// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const actualizado = await usersService.update(req.params.id, req.body);
        if (!actualizado) return res.status(404).json({ message: "Usuario no encontrado" });
        res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario", error });
    }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        const eliminado = await usersService.remove(req.params.id);
        if (!eliminado) return res.status(404).json({ message: "Usuario no encontrado" });
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario", error });
    }
};

// Ver preferencias de usuario
exports.verPreferencias = async (req, res) => {
    try {
        const prefs = await usersService.getPreferencias(req.params.id);
        res.status(200).json(prefs);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener preferencias", error });
    }
};

// Configurar notificaciones
exports.configurarNotificaciones = async (req, res) => {
    try {
        const actualizado = await usersService.setNotificaciones(req.params.id, req.body.notificaciones);
        if (!actualizado) return res.status(404).json({ message: "Usuario no encontrado" });
        res.status(200).json({ message: "Notificaciones actualizadas" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar notificaciones", error });
    }
};

// Ver conexiones
exports.verConexiones = async (req, res) => {
    try {
        const conexiones = await usersService.getConexiones(req.params.id);
        res.status(200).json(conexiones);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener conexiones", error });
    }
};

// Actualizar estado visible
exports.actualizarEstado = async (req, res) => {
    try {
        const actualizado = await usersService.setEstado(req.params.id, req.body.estado);
        if (!actualizado) return res.status(404).json({ message: "Usuario no encontrado" });
        res.status(200).json({ message: "Estado actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar estado", error });
    }
};