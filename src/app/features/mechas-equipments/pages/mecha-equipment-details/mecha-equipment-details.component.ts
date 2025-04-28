import {Component, inject} from '@angular/core';
import {MechaService} from '../../../mechas/services/mecha.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MechaDtoModel} from '../../../mechas/models/mecha-dto.model';
import {MechaEquipmentsService} from '../../services/mecha-equipments.service';
import {MechaEquipmentDetailsDtoModel} from '../../models/mecha-equipment-details-dto.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-mecha-equipment-details',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './mecha-equipment-details.component.html',
  styleUrl: './mecha-equipment-details.component.scss'
})
export class MechaEquipmentDetailsComponent {
  private readonly _mechaEquipmentService: MechaEquipmentsService = inject(MechaEquipmentsService);
  private readonly _ar: ActivatedRoute = inject(ActivatedRoute);
  mechaEquipment!: MechaEquipmentDetailsDtoModel;
  private id!: number;

  constructor(
    private router: Router,
  ) {
    this.id = + this._ar.snapshot.params['id'];
    this._mechaEquipmentService.findMechaEquipmentByID(this.id).subscribe({
      next: data => {
        this.mechaEquipment = data;
      },
      error: error => {
        console.log(error);}
    });
    console.log("Mécha récupéré : " + this.mechaEquipment);
  }
}
