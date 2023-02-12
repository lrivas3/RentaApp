import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoRentaComponent } from './calculo-renta.component';

describe('CalculoRentaComponent', () => {
  let component: CalculoRentaComponent;
  let fixture: ComponentFixture<CalculoRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoRentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
