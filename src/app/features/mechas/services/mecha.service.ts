import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MechaDtoModel} from '../models/mecha-dto.model';
import {environment} from '../../../../environments/environment';
import {MechaPageModel} from '../models/mecha-page.model';
import {MechaDetailsComponent} from '../pages/mecha-details/mecha-details.component';

@Injectable({
  providedIn: 'root'
})
export class MechaService {

  private readonly _http: HttpClient = inject(HttpClient);

  constructor() {
  }

  public getAllMechas(page: number = 1, size: number = 5) {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this._http.get<MechaPageModel>(`${environment.API_URL}/mecha`, {params});
  }

  public findMechaByID(id: number) {
    return this._http.get<MechaDtoModel>(`${environment.API_URL}/mecha/${id}`);
  }

}
