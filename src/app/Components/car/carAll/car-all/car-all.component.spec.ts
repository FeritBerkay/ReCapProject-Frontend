import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAllComponent } from './car-all.component';

describe('CarAllComponent', () => {
  let component: CarAllComponent;
  let fixture: ComponentFixture<CarAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
