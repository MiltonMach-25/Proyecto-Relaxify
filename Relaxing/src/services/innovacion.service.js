const db = require('../config/db.config');

// Explorar destinos de relajación
exports.viajesBienestar = async () => {
    const [rows] = await db.execute('SELECT * FROM innovacion_viajes ORDER BY nombre ASC');
    return rows;
};

// Acceder a experiencias en VR
exports.experienciasVR = async () => {
    const [rows] = await db.execute('SELECT * FROM innovacion_vr ORDER BY nombre ASC');
    return rows;
};

// Interactuar con asistente IA
exports.asistenteIA = async (usuarioId) => {
    const [rows] = await db.execute('SELECT * FROM innovacion_ia WHERE user_id = ?', [usuarioId]);
    return rows;
};

// Consultar novedades de funciones
exports.nuevasFunciones = async () => {
    const [rows] = await db.execute('SELECT * FROM innovacion_novedades ORDER BY fecha DESC');
    return rows;
};

// Probar funciones experimentales (laboratorio)
exports.laboratorio = async (funcionData) => {
    const { userId, funcion, parametros } = funcionData;
    const [result] = await db.execute(
        'INSERT INTO innovacion_laboratorio (user_id, funcion, parametros, fecha) VALUES (?, ?, ?, NOW())',
        [userId, funcion, parametros]
    );
    return { id: result.insertId, ...funcionData };
};