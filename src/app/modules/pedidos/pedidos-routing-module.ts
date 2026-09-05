import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';

/**
 * Rutas del módulo de pedidos.
 *
 * Define la ruta principal `list-pedidos` que carga el componente `ListPedidosComponent`,
 * y un comodín `**` que redirige a `list-pedidos` por defecto.
 */
const routes: Routes = [
  {
    path: 'list-pedidos',
    component: ListPedidosComponent
  },
  {
    path: '**',
    redirectTo: 'list-pedidos'
  }
];

/**
 * Módulo de enrutamiento del módulo de pedidos.
 *
 * Registra las rutas del módulo como rutas hijas usando `RouterModule.forChild`.
 *
 * @remarks
 * Este módulo es importado por `PedidosModule` para configurar
 * la navegación interna del módulo de pedidos.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
