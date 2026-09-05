import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PEDIDOS_DATA } from '../../../core/config/pedidos.config';
import { PedidosData } from '../interfaces/pedidos.interface';

/**
 * Servicio para gestionar pedidos.
 *
 * Se encarga de proporcionar métodos para obtener los pedidos de la aplicación.
 * Actualmente devuelve un listado de pedidos de ejemplo definidos en `PEDIDOS_DATA`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los pedidos.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private pedidosService: PedidosService) {}
 *
 * ngOnInit() {
 *   this.pedidosService.getAllPedidos().subscribe(pedidos => {
 *     console.log(pedidos);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  /**
   * Obtiene todos los pedidos disponibles.
   *
   * @returns Observable con el listado de pedidos (`PedidosData[]`).
   */
  getAllPedidos(): Observable<PedidosData[]> {
    return of(PEDIDOS_DATA);
  }
}
