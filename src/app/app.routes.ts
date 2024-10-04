import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/pages/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent),
    loadChildren: () => import('./features/auth/auth.routes')
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
  // {
  //   path: 'dashboard',
  // },
  // {
  //   path: ''
  // }
];
