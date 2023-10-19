import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { list_of_products } from 'src/demo/list-phone-demo';
import { InfoProduct } from 'src/model/index-list-phone';
import {
  findOrder,
  getListLaptop,
  getListPhone,
  save_id_order,
  select_item_phone,
} from 'src/store-default-app/store-state-phone/store-phone-action.action';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
})
export class ListOfProductsComponent implements OnInit, OnDestroy {
  listPhone$ = this.store.select((state: any) => state.phone.phone);
  readonly total$ = this.store.select((state: any) => state.phone.list_order.length);
  readonly f_order$ = this.store.select((state: any) => state.phone.search_order);
  readonly list_order$ = this.store.select(
    (item: any) => item.phone.list_order
  );
  search: string = '';
  value?: string;
  destroyed = new Subject()

  constructor(
    private store: Store<{ phone: InfoProduct[] }>,
    private router: Router,
    private message: NzMessageService,
    private http: HttpClient
  ) {
    // this.store.dispatch(getListPhone({ listPhone: list_of_products }));


    this.store.dispatch(getListLaptop({ listLaptop: list_of_products }));
  }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Corrected content type header
      'x-rapidapi-key': 'http://localhost:5000/product-phone' // Replace with your actual API key
    });

    this.http.get<InfoProduct[]>('http://localhost:5000/product-phone', { headers: headers }).pipe(
      takeUntil(this.destroyed)
    ).subscribe((product) => {
      console.log('data', product);
      this.store.dispatch(getListPhone({ listPhone: product }));
    });

    console.log('2');
  }
  buy(id: string) {
    this.store.dispatch(save_id_order({ id_order: id }));
    console.log(id)
    this.store.dispatch(select_item_phone());
    this.router.navigate(['/product-details']);
    console.log('id', id);

  }



  order() {
    this.list_order$.subscribe((list) => {
      if (list.length == 0) {
        this.router.navigate(['/empty-order-details'])
      } else {
        this.router.navigate(['/order-details']);
      }
    })
  }

  laptop() {
    this.listPhone$ = this.store.select((state: any) => state.phone.laptop)
  }

  phone() {
    this.listPhone$ = this.store.select((state: any) => state.phone.phone);

  }

  onSearch() {
    if (this.search !== '') {
      this.store.dispatch(findOrder({ idOrder: this.search }))
      this.f_order$.pipe().subscribe((results) => {
        results.forEach((result: any) => {
          console.log(2, result.list_order);
          if (result.list_order.length !== 0) {
            this.router.navigate(['/search-order']);
          } else {
            this.message.info('Tracking order does not exist');

          }
        })
      })
    } else {
      this.message.info('Please do not leave information blank');
    }
  }

  ngOnDestroy(): void {
    this.destroyed.next([])
    this.destroyed.complete();
  }
}
