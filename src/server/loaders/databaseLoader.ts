'use strict';

import logger from '../utils/logger';
import { Sequelize } from 'sequelize-typescript';
import { VehicleRepository } from '../models/repositories/vehicle';

module.exports = async () => {
  try {
    /**
     * Sync all defined models to the DB.
     *
     * this has to be the first database function called
     * everything else should be called ONLY after this
     */
    const sequelize = new Sequelize({
      dialect: 'mysql',
      operatorsAliases: Sequelize.Op as any,
      database: <string>process.env.DATABASE_NAME,
      username: <string>process.env.DATABASE_USER,
      host: <string>process.env.DATABASE_HOST,
      password: <string>process.env.DATABASE_PASSWORD,
      modelPaths: [__dirname + '/../core/models'],
      logging: JSON.parse(<string>process.env.DEBUG)
    });
    await sequelize.sync();

    const vehicle = new VehicleRepository();
    vehicle.loadAll();

    logger('loaders', `Loaded successfully database config with models!`, 'info');
  } catch (err) {
    logger('loader', `Error while loading database config (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};
