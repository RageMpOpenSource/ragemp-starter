'use strict';

import logger from '../modules/utils/logger';
import * as vehicle from '../models/repositories/vehicle';

module.exports = async () => {
  try {
    vehicle.loadAll();
    logger('loaders', `Game successfully bootstrapped!`, 'info');
  } catch (err) {
    logger('loaders', `Error while bottstraping game (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};
