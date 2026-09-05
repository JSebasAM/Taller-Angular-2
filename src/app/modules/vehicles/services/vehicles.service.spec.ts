import { TestBed } from '@angular/core/testing';
import { VEHICLES } from '../../../core/config/vehicles.config';
import { VehiclesService } from './vehicles.service';

describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllVehicles debería retornar un observable con los vehículos', (done) => {
    service.getAllVehicles().subscribe(vehicles => {
      expect(vehicles).toEqual(VEHICLES);
      expect(vehicles.length).toBe(VEHICLES.length);
      done();
    });
  });

  it('getAllVehicles debería retornar exactamente 10 vehículos', (done) => {
    service.getAllVehicles().subscribe(vehicles => {
      expect(vehicles.length).toBe(10);
      done();
    });
  });

  it('cada vehículo debería tener las propiedades requeridas', (done) => {
    service.getAllVehicles().subscribe(vehicles => {
      vehicles.forEach(vehicle => {
        expect(vehicle.id).toBeDefined();
        expect(vehicle.brand).toBeDefined();
        expect(vehicle.model).toBeDefined();
        expect(vehicle.type).toBeDefined();
        expect(vehicle.year).toBeDefined();
        expect(vehicle.price).toBeDefined();
      });
      done();
    });
  });
});
