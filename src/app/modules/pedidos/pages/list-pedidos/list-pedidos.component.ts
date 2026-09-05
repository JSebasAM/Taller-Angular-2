import { Component, inject } from '@angular/core';
import { PedidosData } from '../../interfaces/pedidos.interface';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-list-pedidos',
  standalone: false,
  template: `<app-table-pedidos [pedidos]="pedidos"></app-table-pedidos>`,
})
export class ListPedidosComponent {

  pedidos: PedidosData[] = [];

  private pedidosService = inject(PedidosService);

  ngOnInit(): void {
    this.pedidosService.getAllPedidos().subscribe({
      next: (pedidos) => this.pedidos = pedidos,
      error: (error) => console.error(error),
    })

  }
}
