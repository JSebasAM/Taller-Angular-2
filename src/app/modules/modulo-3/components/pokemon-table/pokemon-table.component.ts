import { Component, Input } from '@angular/core';
import { PokemonDetail } from '../../interfaces/pokemon.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  standalone: false,
})
export class PokemonTableComponent {
  @Input() pokemons: PokemonDetail[] = [];
  @Input() isLoading = true;
  @Input() errorMessage = '';

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

  getTypeBadge(type: string): BadgeType {
    return this.typeMap[type.toLowerCase()] || 'secondary';
  }
}
