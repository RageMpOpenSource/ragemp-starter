'use strict';

/**
 * Loads everything inside modules folder
 */

const glob = require('glob');
import logger from '../utils/logger';

module.exports = async () => {
  try {
    glob.sync(__dirname + '/../modules/' + '/**/*.js').forEach((file: any) => {
      require(file);
    });
    logger('loaders', `Loaded modules successfully!`, 'info');
  } catch (err) {
    logger('loader', `Error while loading a module (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};
