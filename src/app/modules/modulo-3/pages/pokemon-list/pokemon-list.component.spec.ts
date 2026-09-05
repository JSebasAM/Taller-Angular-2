import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonTableComponent } from '../../components/pokemon-table/pokemon-table.component';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { SharedModule } from '../../../shared/shared-module';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../interfaces/pokemon.interface';
import { of, throwError } from 'rxjs';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;

  const mockPokemons: PokemonDetail[] = [
    {
      id: 7,
      name: 'squirtle',
      height: 5,
      weight: 90,
      sprites: {
        front_default: 'squirtle.png',
        other: {
          'official-artwork': {
            front_default: 'squirtle-art.png'
          }
        }
      },
      types: [{ type: { name: 'water' } }]
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, PokemonTableComponent, PokemonCardComponent],
      imports: [SharedModule],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            getPokemons: jest.fn().mockReturnValue(of(mockPokemons))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar datos al inicializarse', () => {
    fixture.detectChanges();
    expect(pokemonService.getPokemons).toHaveBeenCalledWith(20, 0);
    expect(component.pokemons).toEqual(mockPokemons);
    expect(component.isLoading).toBe(false);
    expect(component.errorMessage).toBe('');
  });

  it('debería manejar el error cuando la petición falla', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    (pokemonService.getPokemons as jest.Mock).mockReturnValue(throwError(() => new Error('API Error')));

    fixture.detectChanges();

    expect(component.isLoading).toBe(false);
    expect(component.errorMessage).toBe('No se pudieron cargar los datos de la PokéAPI.');
  });
});
