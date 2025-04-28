import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MechaEquipmentsPageModel} from '../../mechas-equipments/models/mecha-equipments-page.model';
import {environment} from '../../../../environments/environment';
import {MechaEquipmentDetailsDtoModel} from '../../mechas-equipments/models/mecha-equipment-details-dto.model';
import {LegsComponentPageModel} from '../models/legs-component-page.model';
import {LegsComponentDetailsDtoModel} from '../models/legs-component-details-dto.model';

@Injectable({
  providedIn: 'root'
})
export class MechaComponentsService {

  private readonly _http: HttpClient = inject(HttpClient);

  constructor() { }

  //Legs component
  public getAllLegsComponent(page: number = 1, size: number = 5) {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this._http.get<LegsComponentPageModel>(`${environment.API_URL}/mechaComponent/legs`, {params});
  }

  public findLegsComponentByID(id: number) {
    return this._http.get<LegsComponentDetailsDtoModel>(`${environment.API_URL}/mechaComponent/legs/${id}`);
  }
}
