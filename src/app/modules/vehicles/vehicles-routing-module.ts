import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehiclesComponent } from './pages/list-vehicles/list-vehicles.component';

const routes: Routes = [
  {
    path: 'list-vehicles',
    component: ListVehiclesComponent
  },
  {
    path: '**',
    redirectTo: 'list-vehicles'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
