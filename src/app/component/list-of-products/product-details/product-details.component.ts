import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InfoProduct } from 'src/model/index-list-phone';
import { add_order_phone, all_cash, discounts, set_quantity, shipping, total_order_phone, vat } from 'src/store-default-app/store-state-phone/store-phone-action.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  demoValue = 1;
  readonly product_phone$ = this.store.select((state: any) => state.phone.product_by_id)
  total$ = this.store.select((state: any) => state.phone.list_order.length)
  readonly list_order$ = this.store.select(
    (item: any) => item.phone.list_order
  );
  time: string = ''

  add: number = 0;

  toFixedValue: number = 2;
  cutValue: number = 2;
  customFnValue: number = 1;
  precision: number = 2;

  constructor(private store: Store<{ product_by_id: InfoProduct }>, private router: Router) {
    setInterval(() => {
      this.time = new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':' + new Date().getSeconds();
    })
  }

  ngOnInit(): void {
    console.log(111);
    this.store.pipe().subscribe((data) => {
      console.log('data', data);
    })

  }

  onBack(): void {
    this.router.navigate(['/list-products'])
  }

  customPrecisionFn(value: string | number, precision?: number): number {
    return +Number(value).toFixed(precision! + 1);
  }

  addProduct() {
    this.store.dispatch(set_quantity({ quantity: this.customFnValue }));
    this.store.dispatch(add_order_phone())
    this.store.dispatch(total_order_phone())
    this.store.dispatch(shipping())
    this.store.dispatch(vat())
    this.store.dispatch(discounts({ discount: 0.1 }))
    this.store.dispatch(all_cash())
    // this.store.dispatch(saveTrackingCustomer({ trackingId: uuidv4() }))

  }

  order() {
    // this.router.navigate(['/order-details'])
    this.list_order$.subscribe((list) => {
      if (list.length == 0) {
        this.router.navigate(['/empty-order-details'])
      } else {
        this.router.navigate(['/order-details']);
      }
    })
  }
}
