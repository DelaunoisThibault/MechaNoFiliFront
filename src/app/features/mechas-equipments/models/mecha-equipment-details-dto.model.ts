import {EquipmentType} from '../enums/EquipmentType';
import {CommentsDtoModel} from '../../mechas/models/comments-dto.model';

export interface MechaEquipmentDetailsDtoModel {
  id: number;
  name: string;
  imageUrl: string;
  weight: number;
  equipmentType : EquipmentType ;
  powerConsumption: number;
  durability: number;
  commentId: CommentsDtoModel;
}
