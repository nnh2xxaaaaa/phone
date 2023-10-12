import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { list_of_phone } from 'src/demo/list-phone-demo';
import { InfoPhone } from 'src/model/index-list-phone';
import { getListPhone, saveTrackingCustomer, save_id_order, select_item_phone, shipping, vat } from 'src/store-default-app/store-state-phone/store-phone-action.action';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  readonly listPhone$ = this.store.select((state: any) => state.phone.phone)
  readonly total$ = this.store.select((state: any) => state.phone.list_order.length)
  searchTerm: string = '';

  value?: string
  constructor(private store: Store<{ phone: InfoPhone[] }>, private router: Router) {
    this.store.dispatch(getListPhone({ listPhone: list_of_phone }))
  }

  ngOnInit(): void {
  }

  buy(id: string) {
    this.store.dispatch(save_id_order({ id_order: id }))
    this.store.dispatch(select_item_phone())
    this.router.navigate(['/product-details'])
  }

  order() {
    this.router.navigate(['/order-details'])
  }


  onSearch() {
    console.log('Search term:', this.searchTerm);
    // You can perform any actions with this.searchTerm here
  }
}
