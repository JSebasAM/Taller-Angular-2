import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Vehicle, VehicleType } from '../../interfaces/vehicles.interface';

/**
 * Componente de tabla de vehículos.
 *
 * Se utiliza para mostrar un listado de vehículos en una tabla,
 * mostrando información como marca, modelo, tipo, año, precio y un badge
 * visual que indica el tipo de cada vehículo.
 *
 * @remarks
 * Este componente recibe los vehículos desde un componente padre
 * a través del Input `vehicles` y utiliza el mapeo `typeMap`
 * para asignar colores a los badges según el tipo.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-vehicles [vehicles]="vehiclesList"></app-table-vehicles>
 * ```
 */
@Component({
  selector: 'app-table-vehicles',
  templateUrl: './table-vehicles.component.html',
  standalone: false,
})
export class TableVehiclesComponent {
  /**
   * Listado de vehículos que se mostrarán en la tabla.
   * @type {Vehicle[]}
   * @remarks
   * Este Input permite pasar un array de vehículos desde un componente padre,
   * generalmente `ListVehiclesComponent`. Cada vehículo debe cumplir la interfaz `Vehicle`.
   */
  @Input() vehicles: Vehicle[] = [];

  /**
   * Mapeo de tipos de vehículo a tipos de Badge.
   * @type {Record<VehicleType, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada tipo:
   * - `'Sedán'`     → `'primary'`  (azul)
   * - `'SUV'`       → `'success'`  (verde)
   * - `'Camioneta'` → `'warning'`  (amarillo)
   * - `'Deportivo'` → `'danger'`   (rojo)
   *
   * Esto permite que en la tabla cada vehículo tenga un badge visual
   * que indique su tipo de forma clara para el usuario.
   */
  typeMap: Record<VehicleType, BadgeType> = {
    'Sedán': 'primary',
    'SUV': 'success',
    'Camioneta': 'warning',
    'Deportivo': 'danger',
  };
}
