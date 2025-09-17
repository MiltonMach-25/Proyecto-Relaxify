const db = require('../config/db.config');

// Ver ejercicios de relajación
exports.findAllEjercicios = async () => {
    const [rows] = await db.execute('SELECT * FROM ejercicios_relajacion');
    return rows;
};

// Crear un nuevo ejercicio
exports.createEjercicio = async (newEjercicio) => {
    const [result] = await db.execute(
        'INSERT INTO ejercicios_relajacion (titulo, descripcion, duracion) VALUES (?, ?, ?)',
        [newEjercicio.titulo, newEjercicio.descripcion, newEjercicio.duracion]
    );
    return { id: result.insertId, ...newEjercicio };
};

// Editar ejercicio existente
exports.updateEjercicio = async (id, updatedEjercicio) => {
    const [result] = await db.execute(
        'UPDATE ejercicios_relajacion SET titulo = ?, descripcion = ?, duracion = ? WHERE id = ?',
        [updatedEjercicio.titulo, updatedEjercicio.descripcion, updatedEjercicio.duracion, id]
    );
    return result.affectedRows > 0;
};

// Eliminar ejercicio
exports.removeEjercicio = async (id) => {
    const [result] = await db.execute('DELETE FROM ejercicios_relajacion WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

// Escuchar música relajante
exports.getMusica = async () => {
    const [rows] = await db.execute('SELECT * FROM musica_relajante');
    return rows;
};

// Ver meditaciones guiadas
exports.getMeditaciones = async () => {
    const [rows] = await db.execute('SELECT * FROM meditaciones');
    return rows;
};

// Acceder a ejercicios de respiración
exports.getRespiracion = async () => {
    const [rows] = await db.execute('SELECT * FROM ejercicios_respiracion');
    return rows;
};

// Participar en reto de 30 días
exports.getReto30Dias = async () => {
    const [rows] = await db.execute('SELECT * FROM reto_30_dias');
    return rows;
};

// Consultar historial de sesiones
exports.getSesiones = async (userId) => {
    const [rows] = await db.execute('SELECT * FROM sesiones WHERE user_id = ?', [userId]);
    return rows;
};

// Generar sesión personalizada
exports.createSesion = async (newSesion) => {
    const [result] = await db.execute(
        'INSERT INTO sesiones (user_id, tipo, duracion, fecha) VALUES (?, ?, ?, NOW())',
        [newSesion.userId, newSesion.tipo, newSesion.duracion]
    );
    return { id: result.insertId, ...newSesion };
};