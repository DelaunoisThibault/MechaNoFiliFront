import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'mechas',
    loadComponent: () => import('./features/mechas/pages/mecha-list/mecha-list.component').then(m => m.MechaListComponent)
  }

];
