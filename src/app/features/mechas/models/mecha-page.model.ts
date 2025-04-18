import {MechaDtoModel} from './mecha-dto.model';

export interface MechaPageModel {
  results: MechaDtoModel[];
  totalPages: number;
  currentPage: number;
}
