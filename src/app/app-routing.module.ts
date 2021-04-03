import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './Components/car/car.component';
import { CarImageComponent } from './Components/carImage/car-image/car-image.component';
import { CategoryComponent } from './Components/category/category.component';
import { ColorComponent } from './Components/color/color.component';

const routes: Routes = [
  {path:"" , pathMatch:"full", component:CarComponent}, 
  {path:"category", component:CategoryComponent},
  {path:"cars", component:CarComponent},
  {path:"colors", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"carimage/:carId", component:CarImageComponent},
  {path:"cars/car-image/:carId", component:CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
