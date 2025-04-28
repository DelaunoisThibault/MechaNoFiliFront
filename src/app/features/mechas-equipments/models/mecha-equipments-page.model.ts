import {MechaEquipmentCreateDtoModel} from './mecha-equipment-create-dto.model';

export interface MechaEquipmentsPageModel {
  results: MechaEquipmentCreateDtoModel[];
  totalPages: number;
  currentPage: number;
}
