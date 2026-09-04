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
