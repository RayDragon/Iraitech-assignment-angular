import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4SquareCornersComponent } from './q4-square-corners.component';

describe('Q4SquareCornersComponent', () => {
  let component: Q4SquareCornersComponent;
  let fixture: ComponentFixture<Q4SquareCornersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q4SquareCornersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q4SquareCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
