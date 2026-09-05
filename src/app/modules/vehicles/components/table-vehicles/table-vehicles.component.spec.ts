import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VEHICLES } from '../../../../core/config/vehicles.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableVehiclesComponent } from './table-vehicles.component';

describe('TableVehiclesComponent', () => {
  let component: TableVehiclesComponent;
  let fixture: ComponentFixture<TableVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableVehiclesComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVehiclesComponent);
    component = fixture.componentInstance;
    component.vehicles = VEHICLES;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada vehículo', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.vehicles.length);
  });

  it('debería mostrar los datos del vehículo en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const vehicle = component.vehicles[index];
      const vehiclePrice = new CurrencyPipe('en-US').transform(vehicle.price);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(vehicle.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(vehicle.brand);
      expect(columns[2].nativeElement.textContent.trim()).toBe(vehicle.model);
      expect(columns[3].nativeElement.textContent.trim()).toBe(vehicle.type);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(vehicle.year));
      expect(columns[5].nativeElement.textContent.trim()).toBe(vehiclePrice);
    });
  });

  it('debería mapear cada tipo de vehículo a su BadgeType correcto', () => {
    expect(component.typeMap['Sedán']).toBe('primary');
    expect(component.typeMap['SUV']).toBe('success');
    expect(component.typeMap['Camioneta']).toBe('warning');
    expect(component.typeMap['Deportivo']).toBe('danger');
  });

  it('debería inicializar vehicles como array vacío por defecto', () => {
    const freshFixture = TestBed.createComponent(TableVehiclesComponent);
    const freshComponent = freshFixture.componentInstance;
    expect(freshComponent.vehicles).toEqual([]);
  });
});
