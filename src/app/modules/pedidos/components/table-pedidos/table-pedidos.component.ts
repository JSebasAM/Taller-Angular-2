import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { PedidosData, PedidoStatus } from '../../interfaces/pedidos.interface';

/**
 * Componente de tabla de pedidos.
 *
 * Se utiliza para mostrar un listado de pedidos en una tabla,
 * mostrando información como cliente, fecha, total, método de pago
 * y un badge visual que indica el estado de cada pedido.
 *
 * @remarks
 * Este componente recibe los pedidos desde un componente padre
 * a través del Input `pedidos` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado del pedido.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-pedidos [pedidos]="pedidosList"></app-table-pedidos>
 * ```
 */
@Component({
  selector: 'app-table-pedidos',
  standalone: false,
  templateUrl: './table-pedidos.component.html',
  styleUrl: './table-pedidos.component.scss',
})
export class TablePedidosComponent {
  /**
   * Listado de pedidos que se mostrarán en la tabla.
   * @type {PedidosData[]}
   * @remarks
   * Este Input permite pasar un array de pedidos desde un componente padre,
   * generalmente `ListPedidosComponent`. Cada pedido debe cumplir la interfaz `PedidosData`.
   */
  @Input() pedidos: PedidosData[] = [];

  /**
   * Mapeo de estados de pedido a tipos de Badge.
   * @type {Record<PedidoStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - `'Cancelado'` → `'danger'` (rojo)
   * - `'Pendiente'` → `'warning'` (amarillo)
   * - `'Enviado'` → `'primary'` (azul)
   * - `'Entregado'` → `'success'` (verde)
   *
   * Esto permite que en la tabla cada pedido tenga un badge visual que indique su estado
   * de forma clara para el usuario.
   */
  statusMap: Record<PedidoStatus, BadgeType> = {
    'Cancelado': 'danger',
    'Pendiente': 'warning',
    'Enviado': 'primary',
    'Entregado': 'success',
  };
}
