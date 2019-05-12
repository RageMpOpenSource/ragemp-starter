import Vehicle from '../models/vehicle.model';
import logger from '../utils/logger';
import { randomInt } from '../utils/helpers';

export class VehicleService {
  static create(player: PlayerMp, model: HashOrString): void {
    const primaryColor = [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];
    const secondaryColor = [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];

    Vehicle.create({
      model: model,
      position: JSON.stringify(player.position),
      dimension: player.dimension,
      primaryColor: JSON.stringify(primaryColor),
      secondaryColor: JSON.stringify(secondaryColor)
    }).then((vehicle: Vehicle) => {
      logger('vehicle', `Saved vehicle "${vehicle.model}" in database.`, 'info');
      this.spawn(vehicle);
    });
  }

  static spawn(vehicle: Vehicle): void {
    if (vehicle.position === null) { // We can't spawn vehicle on world when we dont have position.
      logger('vehicle', `Vehicle position is null (vehicleId: ${vehicle.id})!`, 'error');
      return;
    }

    let vehiclePosition = JSON.parse(vehicle.position);
    const createdVehicle = mp.vehicles.new(mp.joaat(vehicle.model), new mp.Vector3(vehiclePosition.x, vehiclePosition.y, vehiclePosition.z), {
      engine: false,
      dimension: vehicle.dimension
    });

    logger('vehicle', `Created vehicle "${vehicle.model}" (GameID: ${createdVehicle.id} / ID: ${vehicle.id}) on world.`, 'info');
    this.configureCreated(createdVehicle, vehicle);
  }

  static configureCreated(createdVehicle: VehicleMp, vehicleData: Vehicle): void {
    try {
      let primaryColor = JSON.parse(vehicleData.primaryColor);
      let secondaryColor = JSON.parse(vehicleData.secondaryColor);

      // Docs: https://wiki.rage.mp/index.php?title=Vehicle::setColorRGB
      createdVehicle.setColorRGB(primaryColor[0], primaryColor[1], primaryColor[2], secondaryColor[0], secondaryColor[1], secondaryColor[2]);

      // For example. You can assign there whatever you want from database.
      createdVehicle.setVariable('databaseId', vehicleData.id);
    } catch (err) {
      logger('vehicle', `Error occurred when configuring vehicle "${vehicleData.model}" (ID: ${vehicleData.id}). (Message: ${err})`, 'error');
    }
  }
}
