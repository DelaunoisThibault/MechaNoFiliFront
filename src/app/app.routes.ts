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
    path: 'mechas/create',
    loadComponent: () => import('./features/mechas/component/create/create.component').then(m => m.CreateComponent)
  },
  {
    path: 'mechas/:id',
    loadComponent: () => import('./features/mechas/pages/mecha-details/mecha-details.component').then(m => m.MechaDetailsComponent)
  },
  {
    path: 'mechas-components',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-list/mecha-components-list.component').then(m => m.MechaComponentsListComponent)
  },
  {
    path: 'mechas-components/specific',
    loadComponent: () => import('./features/mechas-components/pages/mecha-component-details/mecha-component-details.component').then(m => m.MechaComponentDetailsComponent)
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
    path: 'mechas-components/legs/:id',
    loadComponent: () => import('./features/mechas-components/pages/mecha-components-legs-details/mecha-components-legs-details.component').then(m => m.MechaComponentsLegsDetailsComponent)
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
  },
  {
    path: 'mechas-equipments/:id',
    loadComponent: () => import('./features/mechas-equipments/pages/mecha-equipment-details/mecha-equipment-details.component').then(m => m.MechaEquipmentDetailsComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/components/register/register.component').then(m => m.RegisterComponent)
  }

];
