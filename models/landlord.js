'use strict';

module.exports = function (sequelize, DataTypes) {

  var landlord = sequelize.define('landlord', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    overall_rate: DataTypes.FLOAT
  }, {
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        landlord.belongsToMany(models.landlord_quality, { through: models.landlord_landlord_quality } );
      }
    }
  });

  return landlord;
};