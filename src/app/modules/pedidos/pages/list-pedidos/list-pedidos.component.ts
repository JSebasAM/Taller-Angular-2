import { Component, inject } from '@angular/core';
import { PedidosData } from '../../interfaces/pedidos.interface';
import { PedidosService } from '../../services/pedidos.service';

/**
 * Componente contenedor de pedidos.
 *
 * Se utiliza para gestionar y mostrar un listado de pedidos
 * utilizando el componente `TablePedidosComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `PedidosService`
 * para obtener los pedidos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-pedidos></app-list-pedidos>
 * ```
 */
@Component({
  selector: 'app-list-pedidos',
  standalone: false,
  template: `<app-table-pedidos [pedidos]="pedidos"></app-table-pedidos>`,
})
export class ListPedidosComponent {
  /**
   * Listado de pedidos obtenidos desde el servicio.
   * @type {PedidosData[]}
   */
  pedidos: PedidosData[] = [];

  /**
   * Servicio para obtener pedidos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private pedidosService = inject(PedidosService);

  /**
   * Inicializa el componente y carga los pedidos.
   * @remarks
   * Se suscribe al método `getAllPedidos()` del servicio y
   * asigna los datos recibidos a la propiedad `pedidos`.
   */
  ngOnInit(): void {
    this.pedidosService.getAllPedidos().subscribe({
      next: (pedidos) => this.pedidos = pedidos,
      error: (error) => console.error(error),
    });
  }
}
