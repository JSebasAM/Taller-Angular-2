import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
