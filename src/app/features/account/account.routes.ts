import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent)
  },
  {
    path: 'addresses',
    loadComponent: () => import('./pages/addresses/addresses.component').then(c => c.AddressesComponent)
  }
];

export default routes;
