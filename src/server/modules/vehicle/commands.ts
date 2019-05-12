import { VehicleService } from "../../services/vehicle.service";

/**
 * This is only EXAMPLE of creating vehicle with use of manager.
 * Don't use this on production (live) server!
 * There is no validation, you need to take care of this.
 */
const createVehicleCommand = (player: PlayerMp, fullText: string, model: string = 'f620') => {
  VehicleService.create(player, model);
};
mp.events.addCommand('vehicle', createVehicleCommand);
