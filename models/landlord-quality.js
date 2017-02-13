'use strict';

module.exports = function (sequelize, DataTypes) {

  var landlord_quality = sequelize.define('landlord_quality', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        landlord_quality.belongsToMany(models.landlord, { through: models.landlord_landlord_quality } );
      }
    }
  });

  return landlord_quality;
};