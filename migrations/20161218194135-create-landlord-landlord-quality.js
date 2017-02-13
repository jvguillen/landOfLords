'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('landlord_landlord_quality', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      landlord_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'landlord',
          key: 'id',
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION'
        }
      },
      landlord_quality_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'landlord_quality',
          key: 'id',
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION'
        }
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
    return queryInterface.dropTable('landlord_landlord_quality');
  }
};