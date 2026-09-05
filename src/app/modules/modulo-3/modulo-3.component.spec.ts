import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Modulo3Component } from './modulo-3.component';
import { RouterModule } from '@angular/router';

describe('Modulo3Component', () => {
  let component: Modulo3Component;
  let fixture: ComponentFixture<Modulo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Modulo3Component],
      imports: [RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Modulo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
