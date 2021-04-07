import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Components/brand/brand.component';
import { CarComponent } from './Components/car/car.component';
import { CardeatilComponent } from './Components/cardetail/cardeatil.component';
import { CarImageComponent } from './Components/carImage/car-image/car-image.component';
import { CategoryComponent } from './Components/category/category.component';
import { ColorComponent } from './Components/color/color.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { PaymentComponent } from './Components/Payment/payment/payment.component';
import { RentalAddComponent } from './Components/rental/rental-add/rental-add/rental-add.component';
import { RentalComponent } from './Components/rental/rental.component';

const routes: Routes = [
  {path:"" , pathMatch:"full", component:CarComponent}, 
  {path:"category", component:CategoryComponent},
  {path:"cars", component:CarComponent},
  {path:"colors", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cardetail/:carId", component:CardeatilComponent},
  {path:"carimage/:carId", component:CardeatilComponent},
  {path:"cars/car-image/:carId", component:CardeatilComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/filter/:colorId",component:CarComponent},
  {path:"" , pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId/color:colorId", component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentals",component:RentalComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path: "rental/add/:carId", component: RentalAddComponent},
  {path: "payment", component: PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
