// aqui ficam todas as rotas do app
const { Router} = require('express');

const routes = new Router();

// agora posso chamar a rota direto por aqui
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

module.exports = routes;