const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/data.json'); // Asegúrate de que esta ruta es correcta
const middlewares = jsonServer.defaults({ static: './public' });

// Opcional: Desactivar archivos estáticos si no necesitas servir frontend
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server corriendo en http://localhost:${PORT}`);
});
