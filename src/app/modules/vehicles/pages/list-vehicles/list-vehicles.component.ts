import { Component, inject } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicles.interface';
import { VehiclesService } from '../../services/vehicles.service';

/**
 * Componente contenedor de vehículos.
 *
 * Se utiliza para gestionar y mostrar un listado de vehículos
 * utilizando el componente `TableVehiclesComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `VehiclesService`
 * para obtener los vehículos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-vehicles></app-list-vehicles>
 * ```
 */
@Component({
  selector: 'app-list-vehicles',
  template: `<app-table-vehicles [vehicles]="vehicles"></app-table-vehicles>`,
  standalone: false,
})
export class ListVehiclesComponent {
  /**
   * Listado de vehículos obtenidos desde el servicio.
   * @type {Vehicle[]}
   */
  vehicles: Vehicle[] = [];

  /**
   * Servicio para obtener vehículos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private vehiclesService = inject(VehiclesService);

  /**
   * Inicializa el componente y carga los vehículos.
   * @remarks
   * Se suscribe al método `getAllVehicles()` del servicio y
   * asigna los datos recibidos a la propiedad `vehicles`.
   */
  ngOnInit(): void {
    this.vehiclesService.getAllVehicles().subscribe({
      next: (vehicles) => this.vehicles = vehicles,
      error: (error) => console.error(error),
    });
  }
}
