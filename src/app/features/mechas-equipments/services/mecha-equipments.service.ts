import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {MechaEquipmentsPageModel} from '../models/mecha-equipments-page.model';
import {MechaDtoModel} from '../../mechas/models/mecha-dto.model';
import {MechaEquipmentDetailsDtoModel} from '../models/mecha-equipment-details-dto.model';

@Injectable({
  providedIn: 'root'
})
export class MechaEquipmentsService {

  private readonly _http: HttpClient = inject(HttpClient);

  constructor() { }

  public getAllMechaEquipments(page: number = 1, size: number = 5) {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this._http.get<MechaEquipmentsPageModel>(`${environment.API_URL}/mechaEquipment`, {params});
  }

  public findMechaEquipmentByID(id: number) {
    return this._http.get<MechaEquipmentDetailsDtoModel>(`${environment.API_URL}/mechaEquipment/${id}`);
  }
}
