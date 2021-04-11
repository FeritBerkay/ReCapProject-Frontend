import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Components/brand/brand.component';
import { BrandAllComponent } from './Components/brand/brandAll/brand-all/brand-all.component';
import { CarComponent } from './Components/car/car.component';
import { CardeatilComponent } from './Components/cardetail/cardeatil.component';
import { CarImageComponent } from './Components/carImage/car-image/car-image.component';
import { BrandUpdateComponent} from './Components/brand/brandUpdate/brand-update/brand-update.component'
import { CategoryComponent } from './Components/category/category.component';
import { ColorComponent } from './Components/color/color.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { PaymentComponent } from './Components/Payment/payment/payment.component';
import { RentalAddComponent } from './Components/rental/rental-add/rental-add/rental-add.component';
import { RentalComponent } from './Components/rental/rental.component';
import { CarAllComponent } from './Components/car/carAll/car-all/car-all.component';
import { CarUpdateComponent } from './Components/car/carUpdate/car-update/car-update.component';
import { CarAddComponent } from './Components/car/CarAdd/car-add/car-add.component';
import { BrandAddComponent } from './Components/brand/brandAdd/brand-add/brand-add.component';
import { ColorAddComponent } from './Components/color/colorAdd/color-add/color-add.component';
import { ColorUpdateComponent } from './Components/color/colorUpdate/color-update/color-update.component';
import { ColorAllComponent } from './Components/color/colorAll/color-all/color-all.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile/profile.component';

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
  {path:"cars/add",component:CarAddComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"brands/update/:brandId",component:BrandUpdateComponent},
  {path:"brandlist",component:BrandAllComponent},
  {path:"colors/update/:colorId",component:ColorUpdateComponent},
  {path:"colorlist",component:ColorAllComponent},
  {path:"carlist",component:CarAllComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
