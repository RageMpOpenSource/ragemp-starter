'use strict';
import { DataTypes, Sequelize } from "sequelize";
import { VehicleInstance, VehicleAttributes } from "./interfaces/vehicle";


module.exports = (sequelize: Sequelize, DataTypes: DataTypes) => {
  let Vehicle = sequelize.define<VehicleInstance, VehicleAttributes>('Vehicle', {
    model: DataTypes.STRING,
    position: DataTypes.TEXT,
    dimension: DataTypes.INTEGER,
    primaryColor: DataTypes.STRING,
    secondaryColor: DataTypes.STRING
  }, {});

  Vehicle.associate = (models: any) => {
    // Docs about associations: http://docs.sequelizejs.com/class/lib/associations/base.js~Association.html
  };
  return Vehicle;
};
