exports.login = async (data) => ({ message: 'Usuario logueado', data });
exports.register = async (data) => ({ message: 'Usuario registrado', data });
exports.logout = async (id) => ({ message: 'Usuario deslogueado', id });
exports.recuperar = async (correo) => ({ message: 'Correo enviado', correo });
exports.verificar = async (token) => ({ message: 'Cuenta verificada', token });
exports.token = async (id) => ({ message: 'Token generado', id });
exports.dispositivos = async (id) => ({ message: 'Dispositivos listados', id });
exports.desvincular = async (id) => ({ message: 'Dispositivo desvinculado', id });