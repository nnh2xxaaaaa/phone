import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteOrderPhoneComponent } from './complete-order-phone.component';

describe('CompleteOrderPhoneComponent', () => {
  let component: CompleteOrderPhoneComponent;
  let fixture: ComponentFixture<CompleteOrderPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteOrderPhoneComponent]
    });
    fixture = TestBed.createComponent(CompleteOrderPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
