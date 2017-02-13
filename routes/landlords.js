'use strict';

module.exports = function (app, models) {

  app.get('/landlords', function (req, res) {
    models.landlord.findAll({
      include: [
        { model: models.landlord_quality, nested: false }
      ]
    }).then(function (results) {
      res.send(results);
    });
  });

  app.get('/landlords/:id', function (req, res) {
    models.landlord.findById(req.params.id).then(function (result) {
      if (!result) {
        res.status(404).json({ message: 'No results found!' });
      }
      res.send(result);
    });
  });

}