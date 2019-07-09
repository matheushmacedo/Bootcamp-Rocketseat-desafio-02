// aqui ficam todas as rotas do app
import { Router} from 'express';

const routes = new Router();

// agora posso chamar a rota direto por aqui
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world 2222' });
});

// apos instalar o sucrase nas dependencias dev
// posso chamar de outra forma o exports
//module.exports = routes;

export default routes;