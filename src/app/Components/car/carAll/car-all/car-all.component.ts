import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Models/Entities/Car';
import { CarService } from 'src/app/Services/CarService/car.service';

@Component({
  selector: 'app-car-all',
  templateUrl: './car-all.component.html',
  styleUrls: ['./car-all.component.css']
})
export class CarAllComponent implements OnInit {

  cars : Car[] = [];
  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails(){
    this.carService.getCarDetails().subscribe((response)=>{
      this.cars = response.data
    });
  }
  deleteCar(car : Car){
    this.carService.delete(car).subscribe();
  }
}
