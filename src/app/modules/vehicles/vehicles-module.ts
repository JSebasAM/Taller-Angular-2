import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableVehiclesComponent } from './components/table-vehicles/table-vehicles.component';
import { ListVehiclesComponent } from './pages/list-vehicles/list-vehicles.component';
import { VehiclesRoutingModule } from './vehicles-routing-module';
import { VehiclesComponent } from './vehicles.component';

@NgModule({
  declarations: [
    ListVehiclesComponent,
    TableVehiclesComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
