'use strict';

/**
 * This is only example loader for all commands from 'modules/commands' directory.
 * For example you can expand this with Regexp and scan for files with 'command' word inside directories.
 * There is a lot of ways to do this.
 */
const glob = require('glob');
import logger from '../modules/utils/logger';

module.exports = async () => {
  try {
    glob.sync(__dirname + '/../modules/commands/' + '/**/*.js').forEach((file: any) => {
      require(file);
    });
    logger('loaders', `Loaded all commands!`, 'info');
  } catch (err) {
    logger('loaders', `Error while loading commands (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};
