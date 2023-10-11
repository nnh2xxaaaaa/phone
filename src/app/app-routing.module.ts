import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDetailsComponent } from './component/login-details/login-details.component';
import { ListOfProductsComponent } from './component/list-of-products/list-of-products.component';
import { ProductDetailsComponent } from './component/list-of-products/product-details/product-details.component';
import { OrderDetailsComponent } from './component/list-of-products/order-details/order-details.component';

const routes: Routes = [
  { path: 'login', component: LoginDetailsComponent },
  { path: 'list-prdducts', component: ListOfProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'order-details', component: OrderDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
