import express from 'express';
import routes from './routes';

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}

// estou criando uma instancia da classe app
// e exportando o server
//module.exports = new App().server;

// como add o sucrase agora posso usar
export default new App().server;