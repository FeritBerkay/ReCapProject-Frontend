import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/Models/Entities/Car';
import { CarImage } from 'src/app/Models/Entities/CarImage';
import { CarImageService } from 'src/app/Services/CarImageService/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  cars: Car[];
  carId: number;
  images: CarImage[];
  imageUrl: string = 'https://localhost:44399';

  constructor( 
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        if (params['carId']) {
          this.carId = params['carId'];
          this.getCarImagesByCarId(params['carId']);
        }
      });
    }

    getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.images=response.data
    });
}
getCarImages(){
  this.carImageService.getAllCarImages().subscribe(response=>{
    this.images=response.data;
  })
}

goToCars() {
  this.router.navigate(['./cars']);
}
}