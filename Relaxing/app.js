const express = require('express');
require('dotenv').config();

// Importar rutas
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const relaxRoutes = require('./routes/relax.routes');
const datosRoutes = require('./routes/datos.routes');
const conductorRoutes = require('./routes/conductor.routes');
const alertasRoutes = require('./routes/alertas.routes');
const estadisticasRoutes = require('./routes/estadisticas.routes');
const comunidadRoutes = require('./routes/comunidad.routes');
const blogRoutes = require('./routes/blog.routes');
const eventosRoutes = require('./routes/eventos.routes');
const marketplaceRoutes = require('./routes/marketplace.routes');
const innovacionRoutes = require('./routes/innovacion.routes');
const extrasRoutes = require('./routes/extras.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Montaje de rutas con prefijo /api
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/relax', relaxRoutes);
app.use('/api/datos', datosRoutes);
app.use('/api/conductor', conductorRoutes);
app.use('/api/alertas', alertasRoutes);
app.use('/api/estadisticas', estadisticasRoutes);
app.use('/api/comunidad', comunidadRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/innovacion', innovacionRoutes);
app.use('/api/extras', extrasRoutes);

// Ruta raíz para probar
app.get('/', (req, res) => {
    res.send('API Relaxify funcionando');
});

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});