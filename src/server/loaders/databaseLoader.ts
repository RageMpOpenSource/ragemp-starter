'use strict';

import logger from '../utils/logger';
import { sequelize } from '../database/database';
import { VehicleRepository } from '../models/repositories/vehicle';

module.exports = async () => {
  try {
    /**
     * Sync all defined models to the DB.
     *
     * this has to be the first database function called
     * everything else should be called ONLY after this
     */
    await sequelize.sync();

    const vehicle = new VehicleRepository();
    vehicle.loadAll();

    logger('loaders', `Loaded successfully database config with models!`, 'info');
  } catch (err) {
    logger('loader', `Error while loading database config (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};
