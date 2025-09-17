const db = require('../config/db.config');

// Consultar estadísticas de estrés
exports.getEstres = async () => {
    const [rows] = await db.execute('SELECT usuario_id, AVG(nivel_estres) as promedio_estres FROM estres GROUP BY usuario_id');
    return rows;
};

// Ver estadísticas generales de todos los usuarios
exports.getUsuarios = async () => {
    const [rows] = await db.execute('SELECT COUNT(*) as total_usuarios, AVG(nivel_estres) as promedio_general FROM estres');
    return rows[0];
};

// Progreso de un usuario específico
exports.getUsuario = async (usuarioId) => {
    const [rows] = await db.execute('SELECT fecha, nivel_estres FROM estres WHERE usuario_id = ? ORDER BY fecha ASC', [usuarioId]);
    return rows;
};

// Estadísticas globales de estrés
exports.getGlobales = async () => {
    const [rows] = await db.execute('SELECT AVG(nivel_estres) as promedio_global, MAX(nivel_estres) as maximo, MIN(nivel_estres) as minimo FROM estres');
    return rows[0];
};

// Generar un nuevo reporte
exports.nuevoReporte = async ({ usuarioId, titulo, contenido, fecha }) => {
    const [result] = await db.execute(
        'INSERT INTO reportes (usuario_id, titulo, contenido, fecha) VALUES (?, ?, ?, ?)',
        [usuarioId, titulo, contenido, fecha]
    );
    return { id: result.insertId, usuarioId, titulo, contenido, fecha };
};

// Editar un reporte existente
exports.editarReporte = async (id, { titulo, contenido, fecha }) => {
    const [result] = await db.execute(
        'UPDATE reportes SET titulo = ?, contenido = ?, fecha = ? WHERE id = ?',
        [titulo, contenido, fecha, id]
    );
    return { actualizado: result.affectedRows > 0, id };
};

// Eliminar un reporte
exports.eliminarReporte = async (id) => {
    const [result] = await db.execute(
        'DELETE FROM reportes WHERE id = ?',
        [id]
    );
    return { eliminado: result.affectedRows > 0, id };
};

// Ver detalles de un reporte
exports.getReporte = async (id) => {
    const [rows] = await db.execute('SELECT * FROM reportes WHERE id = ?', [id]);
    return rows[0];
};

// Descargar reporte en PDF (simulación)
exports.descargarReporte = async (id) => {
    const [rows] = await db.execute('SELECT * FROM reportes WHERE id = ?', [id]);
    return rows[0]; // Aquí se prepararía la generación de PDF
};