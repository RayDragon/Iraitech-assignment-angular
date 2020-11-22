import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1MissingNumberComponent } from './q1-missing-number.component';

describe('Q1MissingNumberComponent', () => {
  let component: Q1MissingNumberComponent;
  let fixture: ComponentFixture<Q1MissingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q1MissingNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q1MissingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
