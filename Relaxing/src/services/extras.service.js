exports.configuracion = async () => ({ message: 'Configuraciones del sistema' });
exports.ayuda = async () => ({ message: 'Centro de ayuda' });
exports.contacto = async (data) => ({ message: 'Mensaje enviado al soporte', data });
exports.politicas = async () => ({ message: 'Políticas de privacidad' });
exports.terminos = async () => ({ message: 'Términos y condiciones' });
exports.actualizaciones = async () => ({ message: 'Actualizaciones recientes' });