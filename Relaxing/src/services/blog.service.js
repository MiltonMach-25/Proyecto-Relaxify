exports.listar = async () => ({ message: 'Listado de entradas del blog' });
exports.nuevo = async (data) => ({ message: 'Entrada creada', data });
exports.editar = async (id, data) => ({ message: 'Entrada editada', id, data });
exports.eliminar = async (id) => ({ message: 'Entrada eliminada', id });
exports.categorias = async () => ({ message: 'Listado de categorías' });
exports.comentarios = async () => ({ message: 'Listado de comentarios' });