const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Amelia Pond');
});

module.exports = routes;
