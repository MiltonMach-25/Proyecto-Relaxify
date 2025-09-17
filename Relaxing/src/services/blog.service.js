const db = require('../config/db.config');

// Ver artículos del blog
exports.getArticulos = async () => {
    const [rows] = await db.execute('SELECT * FROM blog_articulos ORDER BY fecha DESC');
    return rows;
};

// Crear un nuevo artículo
exports.nuevoArticulo = async ({ titulo, contenido, categoria, autorId, fecha }) => {
    const [result] = await db.execute(
        'INSERT INTO blog_articulos (titulo, contenido, categoria, autor_id, fecha) VALUES (?, ?, ?, ?, ?)',
        [titulo, contenido, categoria, autorId, fecha]
    );
    return { id: result.insertId, titulo, contenido, categoria, autorId, fecha };
};

// Editar un artículo
exports.editarArticulo = async (id, { titulo, contenido, categoria }) => {
    const [result] = await db.execute(
        'UPDATE blog_articulos SET titulo = ?, contenido = ?, categoria = ? WHERE id = ?',
        [titulo, contenido, categoria, id]
    );
    return { actualizado: result.affectedRows > 0, id };
};

// Eliminar un artículo
exports.eliminarArticulo = async (id) => {
    const [result] = await db.execute(
        'DELETE FROM blog_articulos WHERE id = ?',
        [id]
    );
    return { eliminado: result.affectedRows > 0, id };
};

// Ver categorías del blog
exports.getCategorias = async () => {
    const [rows] = await db.execute('SELECT * FROM blog_categorias ORDER BY nombre ASC');
    return rows;
};

// Ver comentarios del blog
exports.getComentarios = async () => {
    const [rows] = await db.execute('SELECT * FROM blog_comentarios ORDER BY fecha ASC');
    return rows;
};