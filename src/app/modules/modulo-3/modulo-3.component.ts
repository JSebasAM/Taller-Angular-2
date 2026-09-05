import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección del modulo 3.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con el modulo 3, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación.
 *
 * @example
 * ```html
 * <app-modulo-3></app-modulo-3>
 * ```
 */
@Component({
  selector: 'app-modulo-3',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class Modulo3Component { }
