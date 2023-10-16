import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDetailsComponent } from './component/login-details/login-details.component';
import { ListOfProductsComponent } from './component/list-of-products/list-of-products.component';
import { ProductDetailsComponent } from './component/list-of-products/product-details/product-details.component';
import { OrderDetailsComponent } from './component/component-detail-order/order-details/order-details.component';
import { CompleteOrderPhoneComponent } from './component/component-detail-order/complete-order-phone/complete-order-phone.component';
import { DetailOrderSearchComponent } from './component/component-detail-order/detail-order-search/detail-order-search.component';
import { OrderCartIsEmptyComponent } from './order-cart-is-empty/order-cart-is-empty.component';

const routes: Routes = [
  { path: '', component: LoginDetailsComponent },
  { path: 'list-products', component: ListOfProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'order-phone-complete', component: CompleteOrderPhoneComponent },
  { path: 'search-order', component: DetailOrderSearchComponent },
  { path: 'empty-order-details', component: OrderCartIsEmptyComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
