const db = require('../config/db.config');

exports.login = async (correo, password) => {
    const [rows] = await db.execute(
        'SELECT * FROM usuarios WHERE correo = ? AND password = ?',
        [correo, password]
    );
    return rows[0];
};

exports.register = async (nuevoUsuario) => {
    const [result] = await db.execute(
        'INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)',
        [nuevoUsuario.nombre, nuevoUsuario.correo, nuevoUsuario.password]
    );
    return { id: result.insertId, ...nuevoUsuario };
};

exports.logout = async (userId) => {
    const [result] = await db.execute(
        'UPDATE usuarios SET session_activa = 0 WHERE id = ?',
        [userId]
    );
    return result.affectedRows > 0;
};

exports.recuperar = async (correo) => {
    const [rows] = await db.execute(
        'SELECT * FROM usuarios WHERE correo = ?',
        [correo]
    );
    return rows[0];
};

exports.verificar = async (userId) => {
    const [rows] = await db.execute(
        'SELECT verificado FROM usuarios WHERE id = ?',
        [userId]
    );
    return rows[0];
};

exports.token = async (userId) => {
    const [rows] = await db.execute(
        'SELECT token FROM usuarios WHERE id = ?',
        [userId]
    );
    return rows[0];
};

exports.dispositivos = async (userId) => {
    const [rows] = await db.execute(
        'SELECT * FROM dispositivos WHERE usuario_id = ?',
        [userId]
    );
    return rows;
};

exports.desvincular = async (dispositivoId) => {
    const [result] = await db.execute(
        'DELETE FROM dispositivos WHERE id = ?',
        [dispositivoId]
    );
    return result.affectedRows > 0;
};