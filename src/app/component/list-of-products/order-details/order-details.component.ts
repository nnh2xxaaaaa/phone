import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { all_cash, delete_in_order, discounts, exportExcel, saveTrackingCustomer, shipping, total_order_phone, vat } from 'src/store-default-app/store-state-phone/store-phone-action.action';
import * as XLSX from 'xlsx'
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  readonly list_order$ = this.store.select((item: any) => item.phone.list_order)
  readonly total_order$ = this.store.select((item: any) => Number(item.phone.total_order_phone).toLocaleString('en-US'))
  readonly vat$ = this.store.select((item: any) => Number(item.phone.vat).toLocaleString('en-US'))
  readonly shipping$ = this.store.select((item: any) => Number(item.phone.shipping).toLocaleString('en-US'))
  readonly discount$ = this.store.select((item: any) => Number(item.phone.discount).toLocaleString('en-US'))
  readonly total$ = this.store.select((item: any) => Number(item.phone.total_cash).toLocaleString('en-US'))
  constructor(private store: Store,) { }
  realtime: string = `${new Date().toString().slice(0, 21)} [ Viet Nam Time ]`
  tracking: string = uuidv4().slice(0, 8)
  ngOnInit(): void {

  }

  deleteInOrder(id: string) {
    this.store.dispatch(delete_in_order({ id: id }))
    this.store.dispatch(total_order_phone())
    this.store.dispatch(shipping())
    this.store.dispatch(vat())
    this.store.dispatch(discounts({ discount: 0.1 }))
    this.store.dispatch(all_cash())

  }

  exportExcel() {
    this.store.dispatch(exportExcel())
  }

  saveOrder() {
    this.store.dispatch(saveTrackingCustomer({ trackingId: this.tracking }))
  }


}

