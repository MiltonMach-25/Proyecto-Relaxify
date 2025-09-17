const db = require('../config/db.config');

// Listar todos los registros biométricos
exports.getAllDatos = async () => {
    const [rows] = await db.execute('SELECT * FROM datos_biometricos ORDER BY fecha DESC');
    return rows;
};

// Subir datos desde smartwatch
exports.subirDatos = async ({ userId, ritmo, presion, sueno }) => {
    const [result] = await db.execute(
        'INSERT INTO datos_biometricos (user_id, ritmo_cardiaco, presion, sueno, fecha) VALUES (?, ?, ?, ?, NOW())',
        [userId, ritmo, presion, sueno]
    );
    return { id: result.insertId, userId, ritmo, presion, sueno };
};

// Editar registro biométrico
exports.updateDato = async (id, { ritmo, presion, sueno }) => {
    const [result] = await db.execute(
        'UPDATE datos_biometricos SET ritmo_cardiaco = ?, presion = ?, sueno = ? WHERE id = ?',
        [ritmo, presion, sueno, id]
    );
    return { actualizado: result.affectedRows > 0, id };
};

// Eliminar registro biométrico
exports.deleteDato = async (id) => {
    const [result] = await db.execute('DELETE FROM datos_biometricos WHERE id = ?', [id]);
    return { eliminado: result.affectedRows > 0, id };
};

// Ver análisis automático de IA
exports.getAnalisis = async (userId) => {
    const [rows] = await db.execute(
        'SELECT AVG(ritmo_cardiaco) as promedio_ritmo, AVG(presion) as promedio_presion FROM datos_biometricos WHERE user_id = ?',
        [userId]
    );
    return rows[0];
};

// Consultar historial de ritmo cardíaco
exports.getRitmo = async (userId) => {
    const [rows] = await db.execute(
        'SELECT fecha, ritmo_cardiaco FROM datos_biometricos WHERE user_id = ? ORDER BY fecha DESC',
        [userId]
    );
    return rows;
};

// Comparar registros de distintos días
exports.compararDatos = async (userId, { fecha1, fecha2 }) => {
    const [rows] = await db.execute(
        'SELECT fecha, ritmo_cardiaco, presion, sueno FROM datos_biometricos WHERE user_id = ? AND (DATE(fecha) = ? OR DATE(fecha) = ?)',
        [userId, fecha1, fecha2]
    );
    return rows;
};

// Mostrar tendencias de salud
exports.getTendencias = async (userId) => {
    const [rows] = await db.execute(
        'SELECT DATE(fecha) as dia, AVG(ritmo_cardiaco) as ritmo_promedio, AVG(presion) as presion_promedio FROM datos_biometricos WHERE user_id = ? GROUP BY dia ORDER BY dia ASC',
        [userId]
    );
    return rows;
};

// Ver recomendaciones personalizadas
exports.getRecomendaciones = async (userId) => {
    const [rows] = await db.execute(
        'SELECT AVG(ritmo_cardiaco) as promedio_ritmo, AVG(presion) as promedio_presion FROM datos_biometricos WHERE user_id = ?',
        [userId]
    );
    const data = rows[0];
    let recomendacion = "Todo en orden";

    if (data.promedio_ritmo > 100) recomendacion = "Practica respiración y baja el ritmo cardíaco";
    if (data.promedio_presion > 130) recomendacion = "Se recomienda control médico para presión arterial";

    return { ...data, recomendacion };
};

// Descargar datos en PDF o Excel
exports.exportarDatos = async (userId) => {
    const [rows] = await db.execute(
        'SELECT * FROM datos_biometricos WHERE user_id = ? ORDER BY fecha DESC',
        [userId]
    );
    return rows; // Preparados para exportación
};
