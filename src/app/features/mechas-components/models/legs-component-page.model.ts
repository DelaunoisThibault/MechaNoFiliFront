import {LegsComponentCreateDtoModel} from './legs-component-create-dto.model';

export interface LegsComponentPageModel {
  results: LegsComponentCreateDtoModel[];
  totalPages: number;
  currentPage: number;
}
