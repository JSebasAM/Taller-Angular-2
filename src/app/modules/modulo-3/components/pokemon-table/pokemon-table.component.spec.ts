import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTableComponent } from './pokemon-table.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { SharedModule } from '../../../shared/shared-module';
import { PokemonDetail } from '../../interfaces/pokemon.interface';

describe('PokemonTableComponent', () => {
  let component: PokemonTableComponent;
  let fixture: ComponentFixture<PokemonTableComponent>;

  const mockPokemons: PokemonDetail[] = [
    {
      id: 4,
      name: 'charmander',
      height: 6,
      weight: 85,
      sprites: {
        front_default: 'charmander.png',
        other: {
          'official-artwork': {
            front_default: 'charmander-art.png'
          }
        }
      },
      types: [{ type: { name: 'fire' } }]
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonTableComponent, PokemonCardComponent],
      imports: [SharedModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería retornar el tipo de badge adecuado según el elemento', () => {
    expect(component.getTypeBadge('fire')).toBe('danger');
    expect(component.getTypeBadge('water')).toBe('primary');
    expect(component.getTypeBadge('grass')).toBe('success');
    expect(component.getTypeBadge('unknown_type')).toBe('secondary');
  });

  it('debería renderizar la lista de pokemones si no está cargando', () => {
    component.isLoading = false;
    component.errorMessage = '';
    component.pokemons = mockPokemons;
    fixture.detectChanges();

    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(1);
  });
});
