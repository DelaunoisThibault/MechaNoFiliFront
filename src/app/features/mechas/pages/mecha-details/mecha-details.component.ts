import {Component, inject} from '@angular/core';
import {MechaService} from '../../services/mecha.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MechaDtoModel} from '../../models/mecha-dto.model';

@Component({
  selector: 'app-mecha-details',
  imports: [],
  templateUrl: './mecha-details.component.html',
  styleUrl: './mecha-details.component.scss'
})
export class MechaDetailsComponent {
  private readonly _mechaService: MechaService = inject(MechaService);
  private readonly _ar: ActivatedRoute = inject(ActivatedRoute);
  mecha!: MechaDtoModel;
  private id!: number;

  constructor(
    private router: Router,
  ) {
    this.id = + this._ar.snapshot.params['id'];
    this._mechaService.findMechaByID(this.id).subscribe({
      next: data => {
        this.mecha = data;
      },
      error: error => {
        console.log(error);}
    });
    console.log("Mécha récupéré : " + this.mecha);
  }
}
