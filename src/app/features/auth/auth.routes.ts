import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../auth/pages/login-page/login-page.component').then(c => c.LoginPageComponent)
  },
  {
    path: 'signin',
    loadComponent: () => import('../auth/pages/register-page/register-page.component').then(c => c.RegisterPageComponent)
  }
];

export default routes;
