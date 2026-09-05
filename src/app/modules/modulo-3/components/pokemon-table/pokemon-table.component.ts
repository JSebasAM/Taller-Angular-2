import { Component, Input } from '@angular/core';
import { PokemonDetail } from '../../interfaces/pokemon.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

/**
 * Componente de tabla para visualizar el listado de Pokémon.
 *
 * @remarks
 * Componente de presentación (Dumb Component) que recibe los Pokémon
 * y su estado de carga para renderizarlos en formato de tabla Bootstrap.
 *
 * @example
 * ```html
 * <app-pokemon-table [pokemons]="list" [isLoading]="false"></app-pokemon-table>
 * ```
 */
@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  standalone: false,
})
export class PokemonTableComponent {
  /** Listado de Pokémon a mostrar en la tabla */
  @Input() pokemons: PokemonDetail[] = [];

  /** Estado de carga de la información */
  @Input() isLoading = true;

  /** Mensaje de error si falla la petición */
  @Input() errorMessage = '';

  /**
   * Mapeo entre el tipo de Pokémon y el color del Badge de Bootstrap.
   */
  typeMap: Record<string, BadgeType> = {
    fire: 'danger',
    water: 'primary',
    grass: 'success',
    electric: 'warning',
    poison: 'dark',
    bug: 'success',
    flying: 'info',
    ground: 'warning',
    normal: 'secondary',
  };

  /**
   * Obtiene el tipo de badge visual según el nombre del tipo de Pokémon.
   *
   * @param type - Nombre del tipo de Pokémon (ej. 'fire', 'water')
   * @returns El identificador del BadgeType para el badge
   */
  getTypeBadge(type: string): BadgeType {
    return this.typeMap[type.toLowerCase()] || 'secondary';
  }
}
