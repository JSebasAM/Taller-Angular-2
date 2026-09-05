import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PokemonApiResponse, PokemonDetail } from '../interfaces/pokemon.interface';

/**
 * Servicio para consultar y gestionar datos provenientes de la PokéAPI.
 *
 * @remarks
 * Proporciona métodos para obtener el listado resumido y los detalles
 * individuales de cada Pokémon.
 *
 * @example
 * ```ts
 * const pokemonService = inject(PokemonService);
 * pokemonService.getPokemons().subscribe(data => console.log(data));
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  /** URL base para realizar las peticiones a la PokéAPI */
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  /** Cliente HTTP de Angular para consumo de servicios REST */
  private http = inject(HttpClient);

  /**
   * Obtiene una lista de Pokémon resolviendo los detalles completos de cada uno.
   *
   * @param limit - Límite de Pokémon a consultar (por defecto 20)
   * @param offset - Desplazamiento para paginación (por defecto 0)
   * @returns Un Observable con el arreglo de objetos PokemonDetail
   */
  getPokemons(limit: number = 20, offset: number = 0): Observable<PokemonDetail[]> {
    return this.http.get<PokemonApiResponse>(`${this.baseUrl}?limit=${limit}&offset=${offset}`).pipe(
      map(res => res.results),
      switchMap(pokemonList => {
        const detailRequests = pokemonList.map(pokemon =>
          this.http.get<PokemonDetail>(pokemon.url)
        );
        return forkJoin(detailRequests);
      })
    );
  }
}
