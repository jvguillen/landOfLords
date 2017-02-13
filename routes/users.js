'use strict';

module.exports = function (app, models) {

  app.get('/users', function (req, res) {
    models.user.findAll({
      include: [{ all: true, nested: true }]
    }).then(function (results) {
      res.send(results);
    });
  });

  app.get('/users/:id', function (req, res) {
    models.user.findById(req.params.id).then(function (result) {
      if (!result) {
        res.status(404).json({ message: 'No results found!' });
      }
      res.send(result);
    });
  });

}