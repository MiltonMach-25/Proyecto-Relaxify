const db = require('../config/db.config');

// Listar todos los eventos
exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM eventos ORDER BY fecha ASC');
    return rows;
};

// Buscar evento por ID
exports.findById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM eventos WHERE id = ?', [id]);
    return rows[0];
};

// Crear un nuevo evento
exports.create = async (newEvent) => {
    const { nombre, fecha, lugar, descripcion } = newEvent;
    const [result] = await db.execute(
        'INSERT INTO eventos (nombre, fecha, lugar, descripcion) VALUES (?, ?, ?, ?)',
        [nombre, fecha, lugar, descripcion]
    );
    return { id: result.insertId, ...newEvent };
};

// Editar un evento
exports.update = async (id, updatedEvent) => {
    const { nombre, fecha, lugar, descripcion } = updatedEvent;
    const [result] = await db.execute(
        'UPDATE eventos SET nombre = ?, fecha = ?, lugar = ?, descripcion = ? WHERE id = ?',
        [nombre, fecha, lugar, descripcion, id]
    );
    return { actualizado: result.affectedRows > 0, id };
};

// Eliminar un evento
exports.remove = async (id) => {
    const [result] = await db.execute('DELETE FROM eventos WHERE id = ?', [id]);
    return { eliminado: result.affectedRows > 0, id };
};

// Inscribirse a un evento
exports.inscribirse = async (id, userId) => {
    const [result] = await db.execute(
        'INSERT INTO inscripciones (evento_id, user_id) VALUES (?, ?)',
        [id, userId]
    );
    return { id: result.insertId, evento_id: id, user_id: userId };
};

// Cancelar inscripción a un evento
exports.cancelar = async (id, userId) => {
    const [result] = await db.execute(
        'DELETE FROM inscripciones WHERE evento_id = ? AND user_id = ?',
        [id, userId]
    );
    return { cancelado: result.affectedRows > 0, evento_id: id, user_id: userId };
};

// Ver calendario de eventos
exports.calendario = async () => {
    const [rows] = await db.execute(
        'SELECT id, nombre, fecha FROM eventos ORDER BY fecha ASC'
    );
    return rows;
};