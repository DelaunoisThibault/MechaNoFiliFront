import {Component, computed, inject, Signal, signal, WritableSignal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MechaEquipmentCreateDtoModel} from '../../models/mecha-equipment-create-dto.model';
import {MechaEquipmentsService} from '../../services/mecha-equipments.service';
import {MechaPageModel} from '../../../mechas/models/mecha-page.model';
import {MechaDtoModel} from '../../../mechas/models/mecha-dto.model';
import {MechaService} from '../../../mechas/services/mecha.service';
import {MechaEquipmentsPageModel} from '../../models/mecha-equipments-page.model';

@Component({
  selector: 'app-mecha-equipments-list',
  imports: [
    RouterLink
  ],
  templateUrl: './mecha-equipments-list.component.html',
  styleUrl: './mecha-equipments-list.component.scss'
})
export class MechaEquipmentsListComponent {

  mechaEquipmentPage: WritableSignal<MechaEquipmentsPageModel | undefined> = signal(undefined);
  mechaEquipments: Signal<MechaEquipmentCreateDtoModel[]> = computed(() => this.mechaEquipmentPage()!.results);
  page: Signal<number> = computed(() => this.mechaEquipmentPage()!.currentPage);
  totalPages: Signal<number> = computed(() => this.mechaEquipmentPage()!.totalPages);

  constructor(
    private mechaEquipmentsService : MechaEquipmentsService,
    private router: Router,
  ) {
    this.mechaEquipmentsService.getAllMechaEquipments().subscribe((data) => {
      this.mechaEquipmentPage.set(data);
      console.log(data);
    });
  }

}
