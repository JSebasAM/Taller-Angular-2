// src/app/modulo-3/services/pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface PokemonSummary {
  name: string;
  url: string;
}

export interface PokemonApiResponse {
  count: number;
  results: PokemonSummary[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private readonly http: HttpClient) {}

  // Obtiene los primeros 20 Pokémon con su detalle completo resuelto
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
