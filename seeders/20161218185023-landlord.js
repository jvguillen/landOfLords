'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var landlords = [
      { first_name: 'Jane', last_name:'Doe', overall_rate: null },
      { first_name: 'Joey', last_name:'Gladstone', overall_rate: null },
      { first_name: 'Danny', last_name:'Tanner', overall_rate: null }
    ];

    return queryInterface.bulkInsert('landlord', landlords, {});

  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('landlord', null, {});
  }
};
