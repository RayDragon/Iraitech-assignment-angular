import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q3FormComponent } from './q3-form.component';

describe('Q3FormComponent', () => {
  let component: Q3FormComponent;
  let fixture: ComponentFixture<Q3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q3FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
