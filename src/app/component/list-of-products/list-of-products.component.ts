import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { list_of_phone } from 'src/demo/list-phone-demo';
import { InfoPhone } from 'src/model/index-list-phone';
import { getListPhone, save_id_order, select_item_phone, shipping, vat } from 'src/store-default-app/store-state-phone/store-phone-action.action';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  readonly listPhone$ = this.store.select((state: any) => state.phone.phone)
  value?: string
  constructor(private store: Store<{ phone: InfoPhone[] }>, private router: Router) { }

  ngOnInit(): void {
    for (let item of list_of_phone) {
      this.store.dispatch(getListPhone({ listPhone: item }))
    }
  }

  buy(id: string) {
    this.store.dispatch(save_id_order({ id_order: id }))
    this.store.dispatch(select_item_phone())


    this.router.navigate(['/product-details'])
  }
}
