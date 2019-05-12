/**
 * You can load here stuff like blips, markers, labels, etc...
 */

import logger from '../utils/logger';
import Vehicle from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';

const bootstrapLoader = async () => {
  try {
    /**
     * Load and spawn all vehicles
     */
    const vehicles = await Vehicle.findAll();
    for (const vehicle of vehicles) {
      VehicleService.spawn(vehicle);
    }

    logger('loaders', `Game successfully bootstrapped!`, 'info');
  } catch (err) {
    logger('loaders', `Error while bootstrapping game (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

export default bootstrapLoader;
