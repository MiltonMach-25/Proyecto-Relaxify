const db = require('../config/db.config');

// Listar productos disponibles
exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM productos ORDER BY nombre ASC');
    return rows;
};

// Buscar producto por ID
exports.findById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0];
};

// Publicar un nuevo producto
exports.create = async (newProducto) => {
    const { nombre, descripcion, precio, stock } = newProducto;
    const [result] = await db.execute(
        'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)',
        [nombre, descripcion, precio, stock]
    );
    return { id: result.insertId, ...newProducto };
};

// Editar un producto
exports.update = async (id, updatedProducto) => {
    const { nombre, descripcion, precio, stock } = updatedProducto;
    const [result] = await db.execute(
        'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?',
        [nombre, descripcion, precio, stock, id]
    );
    return { actualizado: result.affectedRows > 0, id };
};

// Eliminar un producto
exports.remove = async (id) => {
    const [result] = await db.execute('DELETE FROM productos WHERE id = ?', [id]);
    return { eliminado: result.affectedRows > 0, id };
};

// Ver carrito de compras de un usuario
exports.carrito = async (userId) => {
    const [rows] = await db.execute(
        'SELECT c.id, p.nombre, p.precio, c.cantidad FROM carrito c JOIN productos p ON c.producto_id = p.id WHERE c.user_id = ?',
        [userId]
    );
    return rows;
};

// Procesar pago
exports.pago = async (userId, total) => {
    const [result] = await db.execute(
        'INSERT INTO pagos (user_id, total, fecha) VALUES (?, ?, NOW())',
        [userId, total]
    );
    return { id: result.insertId, user_id: userId, total };
};

// Ver historial de compras de un usuario
exports.historial = async (userId) => {
    const [rows] = await db.execute(
        'SELECT * FROM compras WHERE user_id = ? ORDER BY fecha DESC',
        [userId]
    );
    return rows;
};