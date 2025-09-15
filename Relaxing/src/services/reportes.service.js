exports.nuevoReporte = async (data) => ({ message: 'Reporte creado', data });
exports.editarReporte = async (id, data) => ({ message: 'Reporte editado', id, data });
exports.eliminarReporte = async (id) => ({ message: 'Reporte eliminado', id });
exports.detallesReporte = async (id) => ({ message: 'Detalles del reporte', id });
exports.descargarReporte = async (id) => ({ message: 'Reporte descargado', id });