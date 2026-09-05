import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { TablePedidosComponent } from './components/table-pedidos/table-pedidos.component';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';
import { PedidosRoutingModule } from './pedidos-routing-module';
import { PedidosComponent } from './pedidos.component';

/**
 * Módulo de gestión de pedidos.
 *
 * Agrupa todos los componentes, páginas y dependencias necesarias
 * para el funcionamiento del módulo de pedidos de la aplicación.
 *
 * @remarks
 * Este módulo importa `CommonModule`, `SharedModule` y `PedidosRoutingModule`.
 * Declara los componentes `PedidosComponent`, `ListPedidosComponent` y `TablePedidosComponent`.
 */
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
