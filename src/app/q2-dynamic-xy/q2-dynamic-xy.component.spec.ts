import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q2DynamicXyComponent } from './q2-dynamic-xy.component';

describe('Q2DynamicXyComponent', () => {
  let component: Q2DynamicXyComponent;
  let fixture: ComponentFixture<Q2DynamicXyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q2DynamicXyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q2DynamicXyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
