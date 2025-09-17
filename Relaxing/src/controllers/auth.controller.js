const authService = require('../services/auth.service');

exports.login = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const user = await authService.login(correo, password);
        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        res.status(200).json({ message: "Inicio de sesión exitoso", user });
    } catch (error) {
        res.status(500).json({ message: "Error en login", error });
    }
};

exports.register = async (req, res) => {
    try {
        const newUser = await authService.register(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error });
    }
};

exports.logout = async (req, res) => {
    try {
        const updated = await authService.logout(req.body.userId);
        if (!updated) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Sesión cerrada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al cerrar sesión", error });
    }
};

exports.recuperar = async (req, res) => {
    try {
        const user = await authService.recuperar(req.body.correo);
        if (!user) {
            return res.status(404).json({ message: "Correo no registrado" });
        }
        res.status(200).json({ message: "Correo válido para recuperación", user });
    } catch (error) {
        res.status(500).json({ message: "Error al recuperar cuenta", error });
    }
};

exports.verificar = async (req, res) => {
    try {
        const user = await authService.verificar(req.query.userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al verificar cuenta", error });
    }
};

exports.token = async (req, res) => {
    try {
        const token = await authService.token(req.query.userId);
        if (!token) {
            return res.status(404).json({ message: "Token no encontrado" });
        }
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ message: "Error al generar token", error });
    }
};

exports.dispositivos = async (req, res) => {
    try {
        const dispositivos = await authService.dispositivos(req.query.userId);
        res.status(200).json(dispositivos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener dispositivos", error });
    }
};

exports.desvincular = async (req, res) => {
    try {
        const removed = await authService.desvincular(req.body.dispositivoId);
        if (!removed) {
            return res.status(404).json({ message: "Dispositivo no encontrado" });
        }
        res.status(200).json({ message: "Dispositivo desvinculado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al desvincular dispositivo", error });
    }
};
