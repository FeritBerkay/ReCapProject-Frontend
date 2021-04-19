import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Components/car/car.component';
import { CategoryComponent } from './Components/category/category.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NaviComponent } from './Components/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ColorComponent } from './Components/color/color.component';
import { BrandComponent } from './Components/brand/brand.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { RentalComponent } from './Components/rental/rental.component';
import { CarImageComponent } from './Components/carImage/car-image/car-image.component';
import { VatAddedPipe } from './Pipes/vat-added.pipe';
import { FilterpipePipe } from './Pipes/filterpipe.pipe';
import { BrandfilterPipe } from './Pipes/brandfilter.pipe';
import { ColorfilterPipe } from './Pipes/colorfilter.pipe';
import { MenuComponent } from './Components/menu/menu.component';
import { CardeatilComponent } from './Components/cardetail/cardeatil.component';
import { RentalAddComponent } from './Components/rental/rental-add/rental-add/rental-add.component';
import { PaymentComponent } from './Components/Payment/payment/payment.component';

import {ToastrModule} from 'ngx-toastr';
import { CarAddComponent } from './Components/car/CarAdd/car-add/car-add.component';
import { ColorAddComponent } from './Components/color/colorAdd/color-add/color-add.component';
import { BrandAddComponent } from './Components/brand/brandAdd/brand-add/brand-add.component';
import { CarUpdateComponent } from './Components/car/carUpdate/car-update/car-update.component';
import { BrandUpdateComponent } from './Components/brand/brandUpdate/brand-update/brand-update.component';
import { BrandAllComponent } from './Components/brand/brandAll/brand-all/brand-all.component';
import { CarAllComponent } from './Components/car/carAll/car-all/car-all.component';
import { ColorAllComponent } from './Components/color/colorAll/color-all/color-all.component';
import { ColorUpdateComponent } from './Components/color/colorUpdate/color-update/color-update.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile/profile.component';
import { AuthInterceptor } from './Interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    CategoryComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    CarImageComponent,
    VatAddedPipe,
    FilterpipePipe,
    BrandfilterPipe,
    ColorfilterPipe,
    MenuComponent,
    CardeatilComponent,
    RentalAddComponent,
    PaymentComponent,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    BrandAllComponent,
    CarAllComponent,
    ColorAllComponent,
    ColorUpdateComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
