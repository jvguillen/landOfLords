'use strict';

module.exports = function (sequelize, DataTypes) {

  var user_type = sequelize.define('user_type', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return user_type;
};