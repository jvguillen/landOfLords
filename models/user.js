'use strict';

module.exports = function (sequelize, DataTypes) {

  var user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_type_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        user.belongsTo(models.user_type, { foreignKey:'user_type_id'} );
      }
    }
  });

  return user;
};