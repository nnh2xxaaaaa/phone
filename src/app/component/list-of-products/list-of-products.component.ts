import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { list_of_phone } from 'src/demo/list-phone-demo';
import { InfoPhone } from 'src/model/index-list-phone';
import { getListPhone } from 'src/store-default-app/store-state-phone/store-phone-action.action';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  readonly listPhone$ = this.store.select((state: any) => state.phone.phone)
  value?: string
  constructor(private store: Store<{ phone: InfoPhone[] }>) { }

  ngOnInit(): void {
    for (let item of list_of_phone) {
      this.store.dispatch(getListPhone({ listPhone: item }))
    }

    console.log('store', this.store)
  }

  buy(id: string) {
    console.log('test buy', id)
  }
}
