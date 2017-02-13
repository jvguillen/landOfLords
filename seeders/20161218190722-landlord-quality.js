'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var qualities = [
      { name: 'Reliability', slug: 'reliability', status: 1 },
      { name: 'Transparency', slug: 'transparency', status: 1 },
      { name: 'Flexibility', slug: 'flexibility', status: 1 },
      { name: 'Professionalism', slug: 'professionalism', status: 1 },
    ];

    return queryInterface.bulkInsert('landlord_quality', qualities, {});

  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('landlord_quality', null, {});
  }
};
