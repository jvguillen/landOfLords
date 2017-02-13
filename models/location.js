'use strict';

module.exports = function (sequelize, DataTypes) {

  var location = sequelize.define('location', {
    cooling: {
      type: DataTypes.BOOLEAN,
      set: function (val) {
        this.setDataValue('cooling', val);
      },
      get: function() {
        var cooling = this.getDataValue('cooling');
        // 'this' allows you to access attributes of the instance
        return cooling;
      }
    },
    style: DataTypes.STRING,
    area: DataTypes.INTEGER,
    num_full_bath: DataTypes.INTEGER,
    num_bath_half: DataTypes.INTEGER,
    num_stories: DataTypes.INTEGER,
    heating_type: DataTypes.STRING,
    laundry_description: DataTypes.STRING,
    is_occupied: DataTypes.BOOLEAN,
    lot_description: DataTypes.STRING,
    pool: DataTypes.BOOLEAN,
    sub_type: DataTypes.STRING,
    num_bed: DataTypes.INTEGER,
    interior_description: DataTypes.STRING,
    maintenance_expense: DataTypes.FLOAT,
    additional_rooms: DataTypes.STRING,
    exterior_description: DataTypes.STRING,
    water: DataTypes.STRING,
    view: DataTypes.STRING,
    subdivision: DataTypes.STRING,
    construction: DataTypes.STRING,
    parking_leased: DataTypes.BOOLEAN,
    parking_spaces: DataTypes.INTEGER,
    parking_description: DataTypes.STRING,
    listing_type: DataTypes.STRING,
    num_garage_space: DataTypes.FLOAT,
    is_accessible: DataTypes.BOOLEAN,
    occupant_type: DataTypes.STRING,
    year_built: DataTypes.INTEGER,
    mls_id: DataTypes.INTEGER,
    terms: DataTypes.STRING,
    lease_term: DataTypes.STRING,
    disclaimer: DataTypes.STRING,
    cross_street: DataTypes.STRING,
    province: DataTypes.STRING,
    country: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    street_name: DataTypes.STRING,
    street_num: DataTypes.STRING,
    city: DataTypes.STRING,
    full_address: DataTypes.STRING,
    unit: DataTypes.STRING,
    listing_date: DataTypes.DATE,
    last_updated: DataTypes.DATE,
    listing_id: DataTypes.STRING,
    county: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    market_area: DataTypes.STRING,
    lease_type: DataTypes.STRING,
    virtual_tour_url: DataTypes.STRING,
    remarks: DataTypes.TEXT,
    association_fee: DataTypes.INTEGER,
    association_name: DataTypes.STRING,
    association_amenities: DataTypes.STRING
  },
  {
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //Location.belongsTo(models.Country, { foreignKey:'country_id' } );
        //Location.belongsTo(models.Province, { foreignKey:'province_id' } );
        //Location.belongsTo(models.Region, { foreignKey:'region_id' } );
        //Location.belongsTo(models.City, { foreignKey:'city_id' } );
        //Location.belongsTo(models.Hood, { foreignKey:'hood_id', as:'hood' } );
      }
    }
  });
  return location;
};