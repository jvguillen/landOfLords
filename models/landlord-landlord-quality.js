'use strict';

module.exports = function (sequelize, DataTypes) {

  var landlord_landlord_quality = sequelize.define('landlord_landlord_quality', {
    landlord_id: DataTypes.INTEGER,
    landlord_quality_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return landlord_landlord_quality;

};