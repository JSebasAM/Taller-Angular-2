import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PokemonApiResponse, PokemonDetail } from '../interfaces/pokemon.interface';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpClientSpy: { get: jest.Mock };

  const mockApiResponse: PokemonApiResponse = {
    count: 1,
    results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }]
  };

  const mockPokemonDetail: PokemonDetail = {
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    sprites: {
      front_default: 'bulbasaur.png',
      other: {
        'official-artwork': {
          front_default: 'bulbasaur-art.png'
        }
      }
    },
    types: [{ type: { name: 'grass' } }]
  };

  beforeEach(() => {
    httpClientSpy = { get: jest.fn() };

    TestBed.configureTestingModule({
      providers: [
        PokemonService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });

    service = TestBed.inject(PokemonService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar el detalle de los Pokémon correctamente', (done) => {
    httpClientSpy.get.mockImplementation((url: string) => {
      if (url.includes('?limit=')) {
        return of(mockApiResponse);
      }
      return of(mockPokemonDetail);
    });

    service.getPokemons(1, 0).subscribe((pokemons) => {
      expect(pokemons).toEqual([mockPokemonDetail]);
      expect(httpClientSpy.get).toHaveBeenCalledTimes(2);
      done();
    });
  });
});
