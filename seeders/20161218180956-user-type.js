'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var types = [
      { name: 'Tenant', slug: 'tenant', status: 1 },
      { name: 'Landlord', slug: 'landlord', status: 1 },
      { name: 'Admin', slug: 'admin', status: 1 },
    ];

    return queryInterface.bulkInsert('user_type', types, {});

  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_type', null, {});
  }
};
