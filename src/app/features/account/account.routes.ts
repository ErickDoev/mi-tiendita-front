import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent)
  },
  // {
  //   path: 'signin',
  //   loadComponent: () => import('../auth/pages/register-page/register-page.component').then(c => c.RegisterPageComponent)
  // }
];

export default routes;
