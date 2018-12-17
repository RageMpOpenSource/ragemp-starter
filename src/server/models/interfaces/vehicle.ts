import { Instance } from "sequelize";

export interface VehicleAttributes {
  model: string;
  position: string;
  dimension: number;
  primaryColor: string;
  secondaryColor: string;
}

export interface VehicleInstance extends Instance<VehicleAttributes> {
  dataValues: VehicleAttributes;
}
