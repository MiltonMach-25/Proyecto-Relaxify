exports.acceder = async () => ({ message: 'Acceso a la comunidad' });
exports.publicar = async (data) => ({ message: 'Publicación creada', data });
exports.comentarios = async (id) => ({ message: 'Comentarios obtenidos', id });
exports.grupos = async () => ({ message: 'Listado de grupos' });
exports.unirse = async (id) => ({ message: 'Unido al grupo', id });
exports.salir = async (id) => ({ message: 'Saliste del grupo', id });
exports.reaccionar = async (id, data) => ({ message: 'Reacción registrada', id, data });
exports.mensajes = async () => ({ message: 'Mensajes de la comunidad' });
