import { Vehicle } from '../../modules/vehicles/interfaces/vehicles.interface';

/**
 * Listado de vehículos disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de vehículos, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Vehicle[]}
 */
export const VEHICLES: Vehicle[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    type: 'Sedán',
    year: 2022,
    price: 75000000
  },
  {
    id: 2,
    brand: 'Chevrolet',
    model: 'Tracker',
    type: 'SUV',
    year: 2023,
    price: 92000000
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Ranger',
    type: 'Camioneta',
    year: 2021,
    price: 110000000
  },
  {
    id: 4,
    brand: 'Mazda',
    model: 'MX-5',
    type: 'Deportivo',
    year: 2023,
    price: 145000000
  },
  {
    id: 5,
    brand: 'Hyundai',
    model: 'Tucson',
    type: 'SUV',
    year: 2022,
    price: 98000000
  },
  {
    id: 6,
    brand: 'Kia',
    model: 'Rio',
    type: 'Sedán',
    year: 2021,
    price: 62000000
  },
  {
    id: 7,
    brand: 'Nissan',
    model: 'Frontier',
    type: 'Camioneta',
    year: 2022,
    price: 118000000
  },
  {
    id: 8,
    brand: 'BMW',
    model: 'M3',
    type: 'Deportivo',
    year: 2023,
    price: 320000000
  },
  {
    id: 9,
    brand: 'Renault',
    model: 'Koleos',
    type: 'SUV',
    year: 2021,
    price: 88000000
  },
  {
    id: 10,
    brand: 'Volkswagen',
    model: 'Jetta',
    type: 'Sedán',
    year: 2022,
    price: 79000000
  }
];
