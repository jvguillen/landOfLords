'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('location', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cooling: {
        type: Sequelize.BOOLEAN
      },
      style: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.INTEGER
      },
      num_full_bath: {
        type: Sequelize.INTEGER
      },
      num_bath_half: {
        type: Sequelize.INTEGER
      },
      num_stories: {
        type: Sequelize.INTEGER
      },
      heating_type: {
        type: Sequelize.STRING
      },
      laundry_description: {
        type: Sequelize.STRING
      },
      is_occupied: {
        type: Sequelize.BOOLEAN
      },
      lot_description: {
        type: Sequelize.STRING
      },
      pool: {
        type: Sequelize.BOOLEAN
      },
      sub_type: {
        type: Sequelize.STRING
      },
      num_bed: {
        type: Sequelize.INTEGER
      },
      interior_description: {
        type: Sequelize.STRING
      },
      maintenance_expense: {
        type: Sequelize.FLOAT
      },
      additional_rooms: {
        type: Sequelize.STRING
      },
      exterior_description: {
        type: Sequelize.STRING
      },
      water: {
        type: Sequelize.STRING
      },
      view: {
        type: Sequelize.STRING
      },
      subdivision: {
        type: Sequelize.STRING
      },
      construction: {
        type: Sequelize.STRING
      },
      parking_leased: {
        type: Sequelize.BOOLEAN
      },
      parking_spaces: {
        type: Sequelize.INTEGER
      },
      parking_description: {
        type: Sequelize.STRING
      },
      listing_type: {
        type: Sequelize.STRING
      },
      num_garage_space: {
        type: Sequelize.FLOAT
      },
      is_accessible: {
        type: Sequelize.BOOLEAN
      },
      occupant_type: {
        type: Sequelize.STRING
      },
      year_built: {
        type: Sequelize.INTEGER
      },
      mls_id: {
        type: Sequelize.INTEGER
      },
      terms: {
        type: Sequelize.STRING
      },
      lease_term: {
        type: Sequelize.STRING
      },
      disclaimer: {
        type: Sequelize.STRING
      },
      cross_street: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      street_name: {
        type: Sequelize.STRING
      },
      street_num: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      full_address: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      listing_date: {
        type: Sequelize.DATE
      },
      last_updated: {
        type: Sequelize.DATE
      },
      listing_id: {
        type: Sequelize.STRING
      },
      county: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lng: {
        type: Sequelize.FLOAT
      },
      market_area: {
        type: Sequelize.STRING
      },
      lease_type: {
        type: Sequelize.STRING
      },
      virtual_tour_url: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.TEXT
      },
      association_fee: {
        type: Sequelize.INTEGER
      },
      association_name: {
        type: Sequelize.STRING
      },
      association_amenities: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('location');
  }
};