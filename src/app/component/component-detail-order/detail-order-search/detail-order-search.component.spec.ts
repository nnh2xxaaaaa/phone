import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrderSearchComponent } from './detail-order-search.component';

describe('DetailOrderSearchComponent', () => {
  let component: DetailOrderSearchComponent;
  let fixture: ComponentFixture<DetailOrderSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOrderSearchComponent]
    });
    fixture = TestBed.createComponent(DetailOrderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
