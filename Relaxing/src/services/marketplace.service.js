exports.listar = async () => ({ message: 'Productos disponibles' });
exports.nuevo = async (data) => ({ message: 'Producto agregado', data });
exports.editar = async (id, data) => ({ message: 'Producto editado', id, data });
exports.eliminar = async (id) => ({ message: 'Producto eliminado', id });
exports.carrito = async () => ({ message: 'Contenido del carrito' });
exports.pago = async (data) => ({ message: 'Pago procesado', data });
exports.historial = async () => ({ message: 'Historial de compras' });
