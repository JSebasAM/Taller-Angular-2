import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de vehículos.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los vehículos, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-vehicles></app-vehicles>
 * ```
 */
@Component({
  selector: 'app-vehicles',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class VehiclesComponent { }
