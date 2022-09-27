import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoEditComponent } from './carrito-edit.component';

describe('CarritoEditComponent', () => {
  let component: CarritoEditComponent;
  let fixture: ComponentFixture<CarritoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
