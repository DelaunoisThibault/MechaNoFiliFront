import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {MechaDtoModel} from '../../models/mecha-dto.model';
import {MechaService} from '../../services/mecha.service';
import {MechaPageModel} from '../../models/mecha-page.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-mecha-list',
  imports: [
    NgIf
  ],
  templateUrl: './mecha-list.component.html',
  styleUrl: './mecha-list.component.scss'
})
export class MechaListComponent {

  mechaPage: WritableSignal<MechaPageModel | undefined> = signal(undefined);
  mechas: Signal<MechaDtoModel[]> = computed(() => this.mechaPage()!.results);
  page: Signal<number> = computed(() => this.mechaPage()!.currentPage);
  totalPages: Signal<number> = computed(() => this.mechaPage()!.totalPages);

  constructor(
    private mechaService : MechaService
  ) {
    this.mechaService.getAllMechas().subscribe((data) => {
      this.mechaPage.set(data);
    });
  }

  nextPage(): void {
    if(this.page() >= this.totalPages()) return;
    this.mechaService.getAllMechas(this.page() + 1).subscribe((data) => {
      this.mechaPage.set(data);
    });
  }

  previousPage(): void {
    if(this.page() <= 1) return;
    this.mechaService.getAllMechas(this.page() - 1).subscribe((data) => {
      this.mechaPage.set(data);
    });
  }

}
