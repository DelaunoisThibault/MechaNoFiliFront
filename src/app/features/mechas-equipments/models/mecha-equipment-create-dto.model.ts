import {EquipmentType} from '../enums/EquipmentType';

export interface MechaEquipmentCreateDtoModel {
  id: number;
  name: string;
  imageUrl: string;
  weight: number;
  equipmentType : EquipmentType ;
  powerConsumption: number;
  durability: number;
}
