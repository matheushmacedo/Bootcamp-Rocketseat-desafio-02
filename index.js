const express = require('express');

const server = express();

// localhost:3333/pagina
server.get('/pagina', (req, res) => {
  return res.json({message: 'App criada com servidor express'});
})

server.listen(3000);
