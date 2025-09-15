exports.listar = async () => ({ message: 'Listado de eventos' });
exports.nuevo = async (data) => ({ message: 'Evento creado', data });
exports.editar = async (id, data) => ({ message: 'Evento editado', id, data });
exports.eliminar = async (id) => ({ message: 'Evento eliminado', id });
exports.inscribirse = async (id) => ({ message: 'Inscripción realizada', id });
exports.cancelar = async (id) => ({ message: 'Inscripción cancelada', id });
exports.calendario = async () => ({ message: 'Calendario de eventos' });