import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { VEHICLES } from '../../../../core/config/vehicles.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableVehiclesComponent } from '../../components/table-vehicles/table-vehicles.component';
import { VehiclesService } from '../../services/vehicles.service';
import { ListVehiclesComponent } from './list-vehicles.component';

describe('ListVehiclesComponent', () => {
  let component: ListVehiclesComponent;
  let fixture: ComponentFixture<ListVehiclesComponent>;
  let vehiclesService: VehiclesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListVehiclesComponent, TableVehiclesComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVehiclesComponent);
    component = fixture.componentInstance;
    vehiclesService = TestBed.inject(VehiclesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllVehicles al iniciar', () => {
    const spyGetAllVehicles = jest.spyOn(vehiclesService, 'getAllVehicles').mockReturnValue(of(VEHICLES));
    fixture.detectChanges();
    expect(spyGetAllVehicles).toHaveBeenCalled();
  });

  it('debería asignar los vehículos recibidos del servicio', () => {
    jest.spyOn(vehiclesService, 'getAllVehicles').mockReturnValue(of(VEHICLES));
    fixture.detectChanges();
    expect(component.vehicles).toEqual(VEHICLES);
  });

  it('debería pasar los vehículos al componente table-vehicles', () => {
    jest.spyOn(vehiclesService, 'getAllVehicles').mockReturnValue(of(VEHICLES));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableVehiclesComponent))
      .componentInstance;
    expect(tableComponent.vehicles).toEqual(VEHICLES);
  });

  it('debería manejar el error cuando falla getAllVehicles', () => {
    component.vehicles = [];
    const errorResponse = new Error('Error al cargar vehículos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(vehiclesService, 'getAllVehicles').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(vehiclesService.getAllVehicles).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.vehicles.length).toBe(0);
  });

});
