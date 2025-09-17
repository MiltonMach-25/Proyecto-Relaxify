const db = require('../config/db.config');

// Generar un nuevo reporte
exports.nuevo = async ({ titulo, descripcion, user_id }) => {
    const [result] = await db.execute(
        'INSERT INTO reportes (titulo, descripcion, user_id) VALUES (?, ?, ?)',
        [titulo, descripcion, user_id]
    );
    return { id: result.insertId, titulo, descripcion, user_id };
};

// Editar un reporte
exports.editar = async (id, { titulo, descripcion }) => {
    const [result] = await db.execute(
        'UPDATE reportes SET titulo = ?, descripcion = ? WHERE id = ?',
        [titulo, descripcion, id]
    );
    return { id, actualizado: result.affectedRows > 0 };
};

// Eliminar un reporte
exports.eliminar = async (id) => {
    const [result] = await db.execute(
        'DELETE FROM reportes WHERE id = ?',
        [id]
    );
    return { id, eliminado: result.affectedRows > 0 };
};

// Ver detalles de un reporte
exports.detalles = async (id) => {
    const [rows] = await db.execute(
        'SELECT * FROM reportes WHERE id = ?',
        [id]
    );
    return rows[0]; // Devuelve undefined si no existe
};

// Descargar reporte (simulado, retorna info)
exports.descargar = async (id) => {
    const [rows] = await db.execute(
        'SELECT * FROM reportes WHERE id = ?',
        [id]
    );
    return rows[0]; // Devuelve undefined si no existe
};
