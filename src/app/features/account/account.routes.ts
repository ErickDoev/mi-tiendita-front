import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent)
  },
  {
    path: 'addresses',
    loadComponent: () => import('./pages/addresses/addresses.component').then(c => c.AddressesComponent)
  },
  {
    path: 'address/add',
    loadComponent: () => import('./pages/edit-address/edit-address.component').then(c => c.EditAddressComponent)
  },
  {
    path: 'address/:id/edit',
    loadComponent: () => import('./pages/edit-address/edit-address.component').then(c => c.EditAddressComponent)
  },
  {
    path: 'orders',
    loadComponent: () => import('./pages/orders/orders.component').then(c => c.OrdersComponent)
  },
  {
    path: 'order/:id/detail',
    loadComponent: () => import('./pages/order-detail/order-detail.component').then(c => c.OrderDetailComponent)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.component').then(c => c.FavoritesComponent)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./pages/change-password/change-password.component').then(c => c.ChangePasswordComponent)
  }
];

export default routes;
