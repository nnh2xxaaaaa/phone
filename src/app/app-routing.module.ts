import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDetailsComponent } from './component/login-details/login-details.component';
import { ListOfProductsComponent } from './component/list-of-products/list-of-products.component';
import { ProductDetailsComponent } from './component/list-of-products/product-details/product-details.component';
import { OrderDetailsComponent } from './component/list-of-products/order-details/order-details.component';
import { CompleteOrderPhoneComponent } from './component/complete/complete-order-phone/complete-order-phone.component';

const routes: Routes = [
  { path: '', component: LoginDetailsComponent },
  { path: 'list-products', component: ListOfProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'order-details', component: OrderDetailsComponent },
   {path: 'order-phone-complete',component:CompleteOrderPhoneComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
