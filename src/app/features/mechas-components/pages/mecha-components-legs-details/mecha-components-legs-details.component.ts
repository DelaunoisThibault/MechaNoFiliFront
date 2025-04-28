import {Component, inject} from '@angular/core';
import {MechaEquipmentsService} from '../../../mechas-equipments/services/mecha-equipments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MechaEquipmentDetailsDtoModel} from '../../../mechas-equipments/models/mecha-equipment-details-dto.model';
import {MechaComponentsService} from '../../services/mecha-components.service';
import {LegsComponentDetailsDtoModel} from '../../models/legs-component-details-dto.model';

@Component({
  selector: 'app-mecha-components-legs-details',
  imports: [],
  templateUrl: './mecha-components-legs-details.component.html',
  styleUrl: './mecha-components-legs-details.component.scss'
})
export class MechaComponentsLegsDetailsComponent {
  private readonly _mechaComponentService: MechaComponentsService = inject(MechaComponentsService);
  private readonly _ar: ActivatedRoute = inject(ActivatedRoute);
  legsComponent!: LegsComponentDetailsDtoModel;
  private id!: number;

  constructor(
    private router: Router,
  ) {
    this.id = + this._ar.snapshot.params['id'];
    this._mechaComponentService.findLegsComponentByID(this.id).subscribe({
      next: data => {
        this.legsComponent = data;
      },
      error: error => {
        console.log(error);}
    });
    console.log("Mécha récupéré : " + this.legsComponent);
  }
}
