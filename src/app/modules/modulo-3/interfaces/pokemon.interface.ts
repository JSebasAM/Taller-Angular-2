/**
 * Interfaz que representa el resumen de un Pokémon obtenido en el listado inicial.
 *
 * @remarks
 * Contiene el nombre del Pokémon y la URL hacia sus detalles.
 *
 * @example
 * ```ts
 * const summary: PokemonSummary = {
 *   name: 'bulbasaur',
 *   url: 'https://pokeapi.co/api/v2/pokemon/1/'
 * };
 * ```
 */
export interface PokemonSummary {
  /** Nombre del Pokémon */
  name: string;
  /** URL con el detalle completo del Pokémon */
  url: string;
}

/**
 * Interfaz que representa la respuesta de la PokéAPI al listar Pokémon.
 *
 * @remarks
 * Contiene el conteo total de elementos y el arreglo de resúmenes.
 */
export interface PokemonApiResponse {
  /** Cantidad total de registros disponibles */
  count: number;
  /** Listado de Pokémon resumidos */
  results: PokemonSummary[];
}

/**
 * Interfaz que representa el detalle completo de un Pokémon.
 *
 * @remarks
 * Contiene información acerca del id, nombre, dimensiones, sprites y tipos.
 *
 * @example
 * ```ts
 * const detail: PokemonDetail = {
 *   id: 1,
 *   name: 'bulbasaur',
 *   height: 7,
 *   weight: 69,
 *   sprites: { ... },
 *   types: [ ... ]
 * };
 * ```
 */
export interface PokemonDetail {
  /** Identificador único del Pokémon */
  id: number;
  /** Nombre oficial del Pokémon */
  name: string;
  /** Altura del Pokémon en decímetros */
  height: number;
  /** Peso del Pokémon en hectogramos */
  weight: number;
  /** Objeto de imágenes y sprites del Pokémon */
  sprites: {
    /** Imagen frontal por defecto */
    front_default: string;
    /** Arte oficial del Pokémon */
    other: {
      'official-artwork': {
        /** Imagen oficial en alta calidad */
        front_default: string;
      };
    };
  };
  /** Arreglo de tipos del Pokémon (fuego, agua, planta, etc.) */
  types: Array<{
    /** Estructura del tipo */
    type: {
      /** Nombre del tipo */
      name: string;
    };
  }>;
}
