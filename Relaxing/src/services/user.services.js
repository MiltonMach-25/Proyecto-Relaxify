const db = require('../config/db.config');

// Listar todos los usuarios registrados
exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM user');
    return rows;
};

// Consultar perfil de usuario por id
exports.findById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM user WHERE id = ?', [id]);
    return rows[0];
};

// Actualizar información de usuario
exports.update = async (id, updatedUser) => {
    const [result] = await db.execute(
        'UPDATE user SET nombre = ?, correo = ? WHERE id = ?',
        [updatedUser.nombre, updatedUser.correo, id]
    );
    return result.affectedRows > 0;
};

// Eliminar usuario
exports.remove = async (id) => {
    const [result] = await db.execute('DELETE FROM user WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

// Ver preferencias de usuario
exports.getPreferencias = async (id) => {
    const [rows] = await db.execute('SELECT * FROM preferencias WHERE user_id = ?', [id]);
    return rows[0];
};

// Configurar notificaciones
exports.setNotificaciones = async (id, notificaciones) => {
    const [result] = await db.execute(
        'UPDATE preferencias SET notificaciones = ? WHERE user_id = ?',
        [notificaciones, id]
    );
    return result.affectedRows > 0;
};

// Ver conexiones con amigos
exports.getConexiones = async (id) => {
    const [rows] = await db.execute('SELECT * FROM conexiones WHERE user_id = ?', [id]);
    return rows;
};

// Actualizar estado visible
exports.setEstado = async (id, estado) => {
    const [result] = await db.execute(
        'UPDATE user SET estado_visible = ? WHERE id = ?',
        [estado, id]
    );
    return result.affectedRows > 0;
};