"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = {};
const glob = require('glob');
const path = require('path');
const Sequelize = require('sequelize');
const logger_1 = __importDefault(require("../utils/logger"));
// Create connection
const connection = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
// Test database connection, log result to file and console.
connection
    .authenticate()
    .then(() => {
    logger_1.default('database', `Connection to database has been established successfully (${process.env.DATABASE_HOST}).`, 'info');
})
    .catch((err) => {
    logger_1.default('database', `Unable to connect to the database! (Error: ${err})`, 'error');
});
/**
 * Load all models from directory "models".
 * @kubeeek
 */
glob.sync('./packages/rage/models/*.js').forEach((file) => {
    file = path.parse(file);
    db[file.name.toLowerCase()] = connection['import'](path.join(__dirname, '../../models', file.name));
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
// Assign connection to 'db'.
db.connection = connection;
db.Sequelize = Sequelize;
// Export module
exports.default = db;
