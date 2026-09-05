/**
 * Interfaz que representa un vehículo del sistema.
 *
 * Contiene la información básica necesaria para mostrar un vehículo
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada vehículo debe tener un `id` único, `brand` (marca), `model` (modelo),
 * `type` (tipo de vehículo), `year` (año) y `price` (precio en pesos colombianos).
 *
 * @example
 * ```ts
 * const vehiculo: Vehicle = {
 *   id: 1,
 *   brand: 'Toyota',
 *   model: 'Corolla',
 *   type: 'Sedán',
 *   year: 2022,
 *   price: 75000000
 * };
 * ```
 */
export interface Vehicle {
  /** Identificador único del vehículo */
  id: number;

  /** Marca del vehículo (ej. Toyota, Chevrolet) */
  brand: string;

  /** Modelo del vehículo (ej. Corolla, Spark) */
  model: string;

  /** Tipo de vehículo */
  type: VehicleType;

  /** Año de fabricación del vehículo */
  year: number;

  /** Precio del vehículo en pesos colombianos */
  price: number;
}

/**
 * Tipo de vehículo disponible en el sistema.
 *
 * @remarks
 * Este tipo restringe los tipos de vehículo a los valores predefinidos:
 * - `'Sedán'`
 * - `'SUV'`
 * - `'Camioneta'`
 * - `'Deportivo'`
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const tipo: VehicleType = 'SUV';
 * ```
 */
export type VehicleType = 'Sedán' | 'SUV' | 'Camioneta' | 'Deportivo';
