import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../interfaces/pokemon.interface';

/**
 * Componente de página que gestiona el listado de Pokémon de la PokéAPI.
 *
 * @remarks
 * Componente contenedor (Smart Component) que consume el `PokemonService`
 * y pasa los datos al `PokemonTableComponent`.
 *
 * @example
 * ```html
 * <app-pokemon-list></app-pokemon-list>
 * ```
 */
@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  /** Arreglo con la lista de detalles de los Pokémon cargados */
  pokemons: PokemonDetail[] = [];

  /** Indicador de si se están consultando los datos */
  isLoading = true;

  /** Mensaje informativo en caso de error de conexión o consumo de la API */
  errorMessage = '';

  /** Servicio inyectado para realizar peticiones HTTP a la PokéAPI */
  private pokemonService = inject(PokemonService);

  /**
   * Ciclo de vida OnInit de Angular.
   * Carga los datos iniciales al instanciar el componente.
   */
  ngOnInit(): void {
    this.cargarDatos();
  }

  /**
   * Realiza la llamada al servicio para obtener la lista de Pokémon.
   */
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
