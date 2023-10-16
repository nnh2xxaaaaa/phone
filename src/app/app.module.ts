import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { phoneReducer } from 'src/store-default-app/store-state-phone/store-phone-reducer.reducer';
import { StoreModule } from '@ngrx/store';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';
import { LoginDetailsComponent } from './component/login-details/login-details.component';
import { LoginComponent } from './component/login-details/login/login.component';
import { RegisterComponent } from './component/login-details/register/register.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ListOfProductsComponent } from './component/list-of-products/list-of-products.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { OrderDetailsComponent } from './component/component-detail-order/order-details/order-details.component';
import { ProductDetailsComponent } from './component/list-of-products/product-details/product-details.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveFormsModule } from '@angular/forms';
import { NzResultModule } from 'ng-zorro-antd/result';
import { CompleteOrderPhoneComponent } from './component/component-detail-order/complete-order-phone/complete-order-phone.component';
import { DetailOrderSearchComponent } from './component/component-detail-order/detail-order-search/detail-order-search.component';
import { OrderCartIsEmptyComponent } from './order-cart-is-empty/order-cart-is-empty.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ListOfProductsComponent,
    OrderDetailsComponent,
    ProductDetailsComponent,
    CompleteOrderPhoneComponent,
    DetailOrderSearchComponent,
    OrderCartIsEmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NgbModule,
    NzDrawerModule,
    NzInputModule,
    NzFormModule,
    NzDatePickerModule,
    NzSelectModule,
    NzButtonModule,
    StoreModule.forRoot({ phone: phoneReducer }),
    NzModalModule,
    NzIconModule,
    NzBadgeModule,
    NzInputNumberModule,
    NzPageHeaderModule,
    ReactiveFormsModule,
    NzResultModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
