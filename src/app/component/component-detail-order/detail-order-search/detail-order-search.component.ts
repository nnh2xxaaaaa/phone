import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { total_order_phone, shipping, vat, discounts, all_cash } from 'src/store-default-app/store-state-phone/store-phone-action.action';

@Component({
  selector: 'app-detail-order-search',
  templateUrl: './detail-order-search.component.html',
  styleUrls: ['./detail-order-search.component.scss']
})
export class DetailOrderSearchComponent implements OnInit {

  readonly f_order$ = this.store.select((state: any) => state.phone.search_order);
  readonly list$ = this.store.select((state: any) => state.phone.search_order[0]['list_order']);
  readonly total_order$ = this.store.select((item: any) =>
    Number(item.phone.total_order_phone).toLocaleString('en-US')
  );
  readonly vat$ = this.store.select((item: any) =>
    Number(item.phone.vat).toLocaleString('en-US')
  );
  readonly shipping$ = this.store.select((item: any) =>
    Number(item.phone.shipping).toLocaleString('en-US')
  );
  readonly discount$ = this.store.select((item: any) =>
    Number(item.phone.discount).toLocaleString('en-US')
  );
  readonly total$ = this.store.select((item: any) =>
    Number(item.phone.total_cash).toLocaleString('en-US')
  );
  constructor(readonly store: Store) { }
  ngOnInit(): void {
    this.list$.subscribe((state: any) => console.log('state', state))
  }
}
