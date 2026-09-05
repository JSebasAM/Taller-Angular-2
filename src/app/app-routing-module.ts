import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ... rutas previas (modulo-1, modulo-2, etc.)
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'modulo-3',
    loadChildren: () => import('./modules/modulo-3/modulo-3-module').then(m => m.Modulo3Module)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./modules/vehicles/vehicles-module').then(m => m.VehiclesModule)
  },
  {
    path: '',
    redirectTo: 'modulo-3',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
