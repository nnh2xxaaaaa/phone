import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCartIsEmptyComponent } from './order-cart-is-empty.component';

describe('OrderCartIsEmptyComponent', () => {
  let component: OrderCartIsEmptyComponent;
  let fixture: ComponentFixture<OrderCartIsEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCartIsEmptyComponent]
    });
    fixture = TestBed.createComponent(OrderCartIsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
