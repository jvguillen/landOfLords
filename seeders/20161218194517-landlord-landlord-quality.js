'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var landlordQualities = [
      { landlord_id: 1, landlord_quality_id: 1},
      { landlord_id: 1, landlord_quality_id: 2},
      { landlord_id: 1, landlord_quality_id: 3},
      { landlord_id: 1, landlord_quality_id: 4},
      { landlord_id: 2, landlord_quality_id: 1},
      { landlord_id: 2, landlord_quality_id: 2},
      { landlord_id: 2, landlord_quality_id: 3},
      { landlord_id: 2, landlord_quality_id: 4},
      { landlord_id: 3, landlord_quality_id: 1},
      { landlord_id: 3, landlord_quality_id: 2},
      { landlord_id: 3, landlord_quality_id: 3},
      { landlord_id: 3, landlord_quality_id: 4}
    ];

    return queryInterface.bulkInsert('landlord_landlord_quality', landlordQualities, {});

  },
  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('landlord_landlord_quality', null, {});
  }
};
