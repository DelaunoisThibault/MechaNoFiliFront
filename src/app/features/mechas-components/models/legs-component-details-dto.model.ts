import {WeightCategory} from '../../mechas-components/enums/WeightCategory';
import {CommentsDtoModel} from '../../mechas/models/comments-dto.model';

export interface LegsComponentDetailsDtoModel {
  id: number;
  name: string;
  weight: number;
  imageUrl: string;
  commentId: CommentsDtoModel;
  powerConsumption: number;
  durability: number;
  loadLimit: number;
  weightCategory : WeightCategory;
  type: string;
  width: number;
  height: number;
  depth: number;
}
