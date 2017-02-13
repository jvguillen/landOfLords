'use strict';

module.exports = function (app, models) {

  app.get('/locations', function (req, res) {
    models.location.findAndCountAll({
      include: [{ all: true }]
    }).then(function (results) {
      res.send(results);
    });
  });

  app.get('/locations/:id', function (req, res) {
    models.location.findById(req.params.id, {
      include: [{ all: true }]
    }).then(function (result) {
      if (!result) {
        res.status(404).json({ message: 'No results found!' });
      }
      res.send(result);
    });
  });

}