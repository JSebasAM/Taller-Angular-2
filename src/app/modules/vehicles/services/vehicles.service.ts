import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VEHICLES } from '../../../core/config/vehicles.config';
import { Vehicle } from '../interfaces/vehicles.interface';

/**
 * Servicio para gestionar vehículos.
 *
 * Se encarga de proporcionar métodos para obtener los vehículos de la aplicación.
 * Actualmente devuelve un listado de vehículos de ejemplo definidos en `VEHICLES`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los vehículos.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private vehiclesService: VehiclesService) {}
 *
 * ngOnInit() {
 *   this.vehiclesService.getAllVehicles().subscribe(vehicles => {
 *     console.log(vehicles);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  /**
   * Obtiene todos los vehículos disponibles.
   *
   * @returns Observable con el listado de vehículos (`Vehicle[]`).
   */
  getAllVehicles(): Observable<Vehicle[]> {
    return of(VEHICLES);
  }
}
