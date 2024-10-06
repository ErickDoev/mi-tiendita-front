import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/pages/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent),
    loadChildren: () => import('./features/auth/auth.routes')
  },
  {
    path: '',
    loadComponent: () => import('./shared/pages/layout/layout.component').then(c => c.LayoutComponent),
    children: [
      {
        path: 'account',
        loadChildren: () => import('./features/account/account.routes')
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
