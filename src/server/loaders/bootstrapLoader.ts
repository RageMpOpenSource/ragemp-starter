'use strict';

import logger from '../utils/logger';

module.exports = async () => {
  try {
    /**
     * You can load here stuff like blips, markers, labels, etc...
     */
    logger('loaders', `Game successfully bootstrapped!`, 'info');
  } catch (err) {
    logger('loaders', `Error while bootstrapping game (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};
