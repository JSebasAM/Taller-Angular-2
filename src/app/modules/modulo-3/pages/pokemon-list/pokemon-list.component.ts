// src/app/modulo-3/pages/pokemon-list/pokemon-list.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetail[] = [];
  isLoading = true;
  errorMessage = '';

  private pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.pokemonService.getPokemons(20, 0).subscribe({
      next: (data) => {
        this.pokemons = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al consultar PokéAPI:', err);
        this.errorMessage = 'No se pudieron cargar los datos de la PokéAPI.';
        this.isLoading = false;
      }
    });
  }
}
