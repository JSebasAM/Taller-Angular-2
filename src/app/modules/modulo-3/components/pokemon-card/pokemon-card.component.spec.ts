import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonDetail } from '../../interfaces/pokemon.interface';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  const mockPokemon: PokemonDetail = {
    id: 25,
    name: 'pikachu',
    height: 4,
    weight: 60,
    sprites: {
      front_default: 'pikachu.png',
      other: {
        'official-artwork': {
          front_default: 'pikachu-art.png'
        }
      }
    },
    types: [{ type: { name: 'electric' } }]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = mockPokemon;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería recibir y mostrar la propiedad pokemon', () => {
    expect(component.pokemon).toEqual(mockPokemon);
  });
});
