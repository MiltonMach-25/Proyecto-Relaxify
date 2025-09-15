exports.nuevaAlerta = async (data) => ({ message: 'Alerta creada', data });
exports.resolver = async (id) => ({ message: 'Alerta resuelta', id });
exports.eliminar = async (id) => ({ message: 'Alerta eliminada', id });
exports.historial = async () => ({ message: 'Historial de alertas' });
