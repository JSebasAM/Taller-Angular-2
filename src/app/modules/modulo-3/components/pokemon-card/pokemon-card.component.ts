import { Component, Input } from '@angular/core';
import { PokemonDetail } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})

export class PokemonCardComponent {
  @Input() pokemon!: PokemonDetail;
}
