const db = require('../config/db.config');

// Ver estado actual del conductor
exports.getEstado = async (userId) => {
    const [rows] = await db.execute('SELECT estado, modo_conduccion FROM conductores WHERE user_id = ?', [userId]);
    return rows[0];
};

// Consultar historial de alertas del conductor
exports.getHistorial = async (userId) => {
    const [rows] = await db.execute(
        'SELECT * FROM alertas WHERE conductor_id = ? ORDER BY fecha DESC',
        [userId]
    );
    return rows;
};

// Ajustar configuración de conducción
exports.actualizarConfiguracion = async (userId, { velocidad_max, activacion_alertas }) => {
    const [result] = await db.execute(
        'UPDATE conductores SET velocidad_max = ?, activacion_alertas = ? WHERE user_id = ?',
        [velocidad_max, activacion_alertas, userId]
    );
    return { actualizado: result.affectedRows > 0 };
};

// Activar modo conducción segura
exports.activarModo = async (userId) => {
    const [result] = await db.execute(
        'UPDATE conductores SET modo_conduccion = "segura" WHERE user_id = ?',
        [userId]
    );
    return { activado: result.affectedRows > 0 };
};

// Recomendaciones de descanso
exports.getDescanso = async (userId) => {
    const [rows] = await db.execute(
        'SELECT recomendacion FROM descansos WHERE conductor_id = ? ORDER BY fecha DESC LIMIT 1',
        [userId]
    );
    return rows[0];
};

// Mostrar rutas seguras
exports.getRutaSegura = async () => {
    const [rows] = await db.execute('SELECT * FROM rutas_seguras ORDER BY prioridad ASC');
    return rows;
};