const db = require('../config/db.config');

// Login
exports.login = async ({ correo, password }) => {
    const [rows] = await db.execute(
        'SELECT * FROM auth_users WHERE correo = ? AND password = ?',
        [correo, password]
    );
    return rows[0]; // Devuelve el primer usuario encontrado o undefined
};

// Registro
exports.register = async ({ nombre, correo, password }) => {
    const [result] = await db.execute(
        'INSERT INTO auth_users (nombre, correo, password) VALUES (?, ?, ?)',
        [nombre, correo, password]
    );
    return { id: result.insertId, nombre, correo };
};

// Logout (simple, sin validaciones extras)
exports.logout = async (userId) => {
    return { message: `Usuario ${userId} deslogueado` };
};

// Recuperar contraseña
exports.recuperar = async (email) => {
    const [rows] = await db.execute(
        'SELECT * FROM auth_users WHERE correo = ?',
        [email]
    );
    return rows[0]; // Devuelve el usuario o undefined
};

// Verificar cuenta
exports.verificar = async (token) => {
    return { message: `Cuenta verificada con token ${token}` };
};

// Generar token (string fijo editable)
exports.token = async (userId) => {
    return { token: "mi-token-personalizado", userId };
};

// Dispositivos vinculados
exports.dispositivos = async (userId) => {
    const [rows] = await db.execute(
        'SELECT * FROM dispositivos WHERE user_id = ?',
        [userId]
    );
    return rows;
};

// Desvincular dispositivo
exports.desvincular = async (id) => {
    const [result] = await db.execute(
        'DELETE FROM dispositivos WHERE id = ?',
        [id]
    );
    return result.affectedRows > 0;
};