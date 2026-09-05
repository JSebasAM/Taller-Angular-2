import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing-module';
import { PedidosComponent } from './pedidos.component';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';
import { TablePedidosComponent } from './components/table-pedidos/table-pedidos.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    PedidosComponent,
    ListPedidosComponent,
    TablePedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    SharedModule
  ]
})
export class PedidosModule { }
