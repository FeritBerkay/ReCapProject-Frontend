import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/Models/Entities/Car';
import { CarImage } from 'src/app/Models/Entities/CarImage';
import { CarImageService } from 'src/app/Services/CarImageService/car-image.service';
import { CarService } from 'src/app/Services/CarService/car.service';
import { RentalserviceService } from 'src/app/Services/rental/rentalservice.service';

@Component({
  selector: 'app-cardeatil',
  templateUrl: './cardeatil.component.html',
  styleUrls: ['./cardeatil.component.css']
})
export class CardeatilComponent implements OnInit {
  car:Car;
  cars: Car[];
  carId: number;
  images: string[]=[];
  dataLoaded=false;
  currentImage:CarImage;
  imageUrl: string = 'https://localhost:44399';
  carDetails:Car;
  showCarAvail: boolean;

  showAlert:boolean = false;
  constructor( 
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private rentalService:RentalserviceService
    ) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        if (params['carId']) {
          this.carId = params['carId'];
          this.getCarDetailsByCarId(params['carId']);
        }
      });
    }

goToCars() {
  this.router.navigate(['./cars']);
}
setImageClass(imagePath:string){
  if(imagePath === this.images[0]){
    return "carousel-item active"
  }else{
    return "carousel-item"
  }
}
getCarDetailsByCarId(carId: number) {
  this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
    this.cars = response.data;
    this.images = response.data[0].images
    this.dataLoaded=true;
  });
}
getCarDetails(){
  this.carService.getCarDetails().subscribe((response)=>{
    this.cars=response.data;
    this.dataLoaded=true;
  })
}
isCarAvailable(carId:number){
  this.rentalService.isCarAvailable(carId)
    .subscribe((response) => {
      this.showCarAvail = response;
    }, responseEror => {
      this.showAlert = true;
    })
}
}