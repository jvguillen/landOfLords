'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var users = [
      { first_name: 'John',
        last_name: 'Doe',
        username: 'john.doe',
        email: 'john.doe@mailinator.com',
        password: 'password',
        user_type_id: 1
      },
      {
        first_name: 'Jose',
        last_name: 'Guillen',
        username: 'jose.guillen',
        email: 'jose.guillen@mailinator.com',
        password: 'password',
        user_type_id: 3
      },
      {
        first_name: 'Rotem',
        last_name: 'Petranker',
        username: 'rotem.petranker',
        email: 'rotem.petranker@mailinator.com',
        password: 'password',
        user_type_id: 3
      }
    ];

    return queryInterface.bulkInsert('user', users, {});
  },
  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('user', null, {});

  }
};
