const userService = require('../services/user.service');

// Login
exports.login = async (req, res) => {
    try {
        const user = await userService.login(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error en login", error });
    }
};

// Registro
exports.register = async (req, res) => {
    try {
        const newUser = await userService.register(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error en registro", error });
    }
};

// Logout
exports.logout = async (req, res) => {
    try {
        const result = await userService.logout(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error en logout", error });
    }
};

// Recuperar contraseña
exports.recuperar = async (req, res) => {
    try {
        const result = await userService.recuperar(req.body.correo);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al recuperar contraseña", error });
    }
};

// Verificar cuenta
exports.verificar = async (req, res) => {
    try {
        const result = await userService.verificar(req.params.token);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error en verificación", error });
    }
};

// Generar token
exports.token = async (req, res) => {
    try {
        const result = await userService.token(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al generar token", error });
    }
};

// Dispositivos vinculados
exports.dispositivos = async (req, res) => {
    try {
        const result = await userService.dispositivos(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener dispositivos", error });
    }
};

// Desvincular dispositivo
exports.desvincular = async (req, res) => {
    try {
        const result = await userService.desvincular(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al desvincular dispositivo", error });
    }
};