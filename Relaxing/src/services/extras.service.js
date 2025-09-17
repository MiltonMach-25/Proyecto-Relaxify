const db = require('../config/db.config');

// Acceder a configuraciones avanzadas
exports.getConfiguracion = async () => {
    const [rows] = await db.execute('SELECT * FROM extras_configuracion ORDER BY id ASC');
    return rows;
};

// Centro de ayuda y soporte
exports.getAyuda = async () => {
    const [rows] = await db.execute('SELECT * FROM extras_ayuda ORDER BY id ASC');
    return rows;
};

// Enviar consulta a soporte
exports.enviarConsulta = async (consultaData) => {
    const { userId, asunto, mensaje } = consultaData;
    const [result] = await db.execute(
        'INSERT INTO extras_contacto (user_id, asunto, mensaje, fecha) VALUES (?, ?, ?, NOW())',
        [userId, asunto, mensaje]
    );
    return { id: result.insertId, ...consultaData };
};

// Ver políticas de privacidad
exports.getPoliticas = async () => {
    const [rows] = await db.execute('SELECT * FROM extras_politicas ORDER BY fecha DESC');
    return rows;
};

// Ver términos y condiciones
exports.getTerminos = async () => {
    const [rows] = await db.execute('SELECT * FROM extras_terminos ORDER BY fecha DESC');
    return rows;
};

// Ver actualizaciones recientes
exports.getActualizaciones = async () => {
    const [rows] = await db.execute('SELECT * FROM extras_actualizaciones ORDER BY fecha DESC');
    return rows;
};