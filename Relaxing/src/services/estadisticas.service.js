exports.estres = async () => ({ message: 'Estadísticas de estrés' });
exports.usuarios = async () => ({ message: 'Estadísticas generales de usuarios' });
exports.usuario = async (id) => ({ message: 'Progreso de usuario', id });
exports.globales = async () => ({ message: 'Estadísticas globales de estrés' });