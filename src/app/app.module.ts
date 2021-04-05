import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Components/car/car.component';
import { CategoryComponent } from './Components/category/category.component';
import {FormsModule} from "@angular/forms"

import { NaviComponent } from './Components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
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
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
