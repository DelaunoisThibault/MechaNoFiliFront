import {WeightCategory} from '../../mechas-components/enums/WeightCategory';

export interface LegsComponentCreateDtoModel {
  id: number;
  name: string;
  weight: number;
  imageUrl: string;
  powerConsumption: number;
  durability: number;
  loadLimit: number;
  weightCategory : WeightCategory;
  type: string;
  width: number;
  height: number;
  depth: number;
}
