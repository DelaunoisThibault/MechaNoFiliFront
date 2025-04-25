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
  },
  {
    path: 'mechas-components',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-list/mecha-components-list.component').then(m => m.MechaComponentsListComponent)
  },
  {
    path: 'mechas-components/arms',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-arms-list/mecha-components-arms-list.component').then(m => m.MechaComponentsArmsListComponent)
  },
  {
    path: 'mechas-components/legs',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-legs-list/mecha-components-legs-list.component').then(m => m.MechaComponentsLegsListComponent)
  },
  {
    path: 'mechas-components/heads',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-heads-list/mecha-components-heads-list.component').then(m => m.MechaComponentsHeadsListComponent)
  },
  {
    path: 'mechas-components/torsos',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-torsos-list/mecha-components-torsos-list.component').then(m => m.MechaComponentsTorsosListComponent)
  },
  {
    path: 'mechas-components/generators',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-generators-list/mecha-components-generators-list.component').then(m => m.MechaComponentsGeneratorsListComponent)
  },
  {
    path: 'mechas-components/extensions',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-extensions-list/mecha-components-extensions-list.component').then(m => m.MechaComponentsExtensionsListComponent)
  },
  {
    path: 'mechas-equipments',
    loadComponent: () => import('./features/mechas-equipments/pages/mecha-equipments-list/mecha-equipments-list.component').then(m => m.MechaEquipmentsListComponent)
  }

];
