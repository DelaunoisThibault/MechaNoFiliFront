import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MechaEquipmentsPageModel} from '../../../mechas-equipments/models/mecha-equipments-page.model';
import {MechaEquipmentCreateDtoModel} from '../../../mechas-equipments/models/mecha-equipment-create-dto.model';
import {MechaEquipmentsService} from '../../../mechas-equipments/services/mecha-equipments.service';
import {LegsComponentPageModel} from '../../models/legs-component-page.model';
import {LegsComponentCreateDtoModel} from '../../models/legs-component-create-dto.model';
import {MechaComponentsService} from '../../services/mecha-components.service';

@Component({
  selector: 'app-mecha-components-legs-list',
  imports: [
    RouterLink
  ],
  templateUrl: './mecha-components-legs-list.component.html',
  styleUrl: './mecha-components-legs-list.component.scss'
})
export class MechaComponentsLegsListComponent {

  legsComponentPage: WritableSignal<LegsComponentPageModel | undefined> = signal(undefined);
  legsComponents: Signal<LegsComponentCreateDtoModel[]> = computed(() => this.legsComponentPage()!.results);
  page: Signal<number> = computed(() => this.legsComponentPage()!.currentPage);
  totalPages: Signal<number> = computed(() => this.legsComponentPage()!.totalPages);

  constructor(
    private mechaComponentsService : MechaComponentsService,
    private router: Router,
  ) {
    this.mechaComponentsService.getAllLegsComponent().subscribe((data) => {
      this.legsComponentPage.set(data);
      console.log(data);
    });
  }
}
