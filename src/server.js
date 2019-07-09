const app = require('./app');

app.listen(3333);

// uso esse arquivo server.js separado pois 
// quando for fazer testes unitarios nas rotas eu uso direto a classe
// app sem precisar instanciar o servidor