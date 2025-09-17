const db = require('../config/db.config');

// Crear nueva alerta
exports.nuevaAlerta = async ({ conductorId, tipo, descripcion, nivel }) => {
    const [result] = await db.execute(
        'INSERT INTO alertas (conductor_id, tipo, descripcion, nivel, fecha, resuelta) VALUES (?, ?, ?, ?, NOW(), 0)',
        [conductorId, tipo, descripcion, nivel]
    );
    return { id: result.insertId, conductorId, tipo, descripcion, nivel };
};

// Marcar alerta como resuelta
exports.resolverAlerta = async (id) => {
    const [result] = await db.execute(
        'UPDATE alertas SET resuelta = 1 WHERE id = ?',
        [id]
    );
    return { resuelta: result.affectedRows > 0, id };
};

// Eliminar alerta
exports.eliminarAlerta = async (id) => {
    const [result] = await db.execute(
        'DELETE FROM alertas WHERE id = ?',
        [id]
    );
    return { eliminado: result.affectedRows > 0, id };
};

// Consultar historial de alertas
exports.getHistorial = async () => {
    const [rows] = await db.execute(
        'SELECT * FROM alertas ORDER BY fecha DESC'
    );
    return rows;
};