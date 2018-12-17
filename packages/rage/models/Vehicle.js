'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (sequelize, DataTypes) => {
    let Vehicle = sequelize.define('Vehicle', {
        model: DataTypes.STRING,
        position: DataTypes.TEXT,
        dimension: DataTypes.INTEGER,
        primaryColor: DataTypes.STRING,
        secondaryColor: DataTypes.STRING
    }, {});
    Vehicle.associate = (models) => {
        // Docs about associations: http://docs.sequelizejs.com/class/lib/associations/base.js~Association.html
    };
    return Vehicle;
};
