import { Component, Input } from '@angular/core';
import { PokemonDetail } from '../../interfaces/pokemon.interface';

/**
 * Componente visual para mostrar la tarjeta de información de un Pokémon.
 *
 * @remarks
 * Forma parte de la capa de presentación dentro del módulo 3.
 *
 * @example
 * ```html
 * <app-pokemon-card [pokemon]="pokemonDetail"></app-pokemon-card>
 * ```
 */
@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  /**
   * Detalle del Pokémon a renderizar en la tarjeta.
   */
  @Input() pokemon!: PokemonDetail;
}
