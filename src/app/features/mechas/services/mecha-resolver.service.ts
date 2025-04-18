import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {MechaService} from './mecha.service';
import {catchError, Observable, of} from 'rxjs';
import {MechaPageModel} from '../models/mecha-page.model';

@Injectable({
  providedIn: 'root'
})
export class MechaResolverService implements Resolve<MechaPageModel>{

  constructor(
    private mecha: MechaService,
    private router: Router
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<MechaPageModel> {
    return this.mecha.getAllMechas().pipe(
      catchError((error) => {
        console.error('Error in resolver:', error);
        this.router.navigate(['/home']);
        return of([]);
      })
    );
  }


  }
