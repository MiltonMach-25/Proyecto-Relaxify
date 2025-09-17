const db = require('../config/db.config');

// Acceder a la comunidad Relaxify
exports.getComunidad = async () => {
    const [rows] = await db.execute('SELECT * FROM publicaciones ORDER BY fecha DESC');
    return rows;
};

// Crear una nueva publicación
exports.nuevaPublicacion = async ({ usuarioId, contenido, fecha }) => {
    const [result] = await db.execute(
        'INSERT INTO publicaciones (usuario_id, contenido, fecha) VALUES (?, ?, ?)',
        [usuarioId, contenido, fecha]
    );
    return { id: result.insertId, usuarioId, contenido, fecha };
};

// Ver comentarios de una publicación
exports.getComentarios = async (publicacionId) => {
    const [rows] = await db.execute('SELECT * FROM comentarios WHERE publicacion_id = ? ORDER BY fecha ASC', [publicacionId]);
    return rows;
};

// Ver grupos temáticos
exports.getGrupos = async () => {
    const [rows] = await db.execute('SELECT * FROM grupos ORDER BY nombre ASC');
    return rows;
};

// Unirse a un grupo
exports.unirseGrupo = async (grupoId, usuarioId) => {
    const [result] = await db.execute(
        'INSERT INTO grupo_miembros (grupo_id, usuario_id) VALUES (?, ?)',
        [grupoId, usuarioId]
    );
    return { grupoId, usuarioId };
};

// Salir de un grupo
exports.salirGrupo = async (grupoId, usuarioId) => {
    const [result] = await db.execute(
        'DELETE FROM grupo_miembros WHERE grupo_id = ? AND usuario_id = ?',
        [grupoId, usuarioId]
    );
    return { grupoId, usuarioId };
};

// Reaccionar a una publicación
exports.reaccionarPublicacion = async (publicacionId, usuarioId, tipoReaccion) => {
    const [result] = await db.execute(
        'INSERT INTO reacciones (publicacion_id, usuario_id, tipo) VALUES (?, ?, ?)',
        [publicacionId, usuarioId, tipoReaccion]
    );
    return { publicacionId, usuarioId, tipoReaccion };
};

// Ver mensajes privados
exports.getMensajes = async (usuarioId) => {
    const [rows] = await db.execute(
        'SELECT * FROM mensajes WHERE destinatario_id = ? ORDER BY fecha DESC',
        [usuarioId]
    );
    return rows;
};