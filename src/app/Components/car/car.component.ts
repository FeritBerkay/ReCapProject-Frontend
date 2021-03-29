import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Car } from 'src/app/Models/Entities/Car';
import { CarService } from 'src/app/Services/CarService/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  dataloaded = false;
  constructor(private carsService:CarService) { }
  //Ctor yapısı calısınca direk calısır. Ama ctor yaısı sadece insalitize etmek icin kullanılan bir yapı. Newleme yapılır burayla karıstırma ama mantık ozunde benzer.
  //ngonit component i don yerleştirir.
  ngOnInit(): void {
    this.getCars();
  }
 //Postamndakini buraya yapıyorsun. Apıye baglandık.
  getCars(){
    //subscribe asenkron calışır. Kendi icinde senkron.
    this.carsService.getCars()
    .subscribe(response=>{
      this.cars = response.data;
      this.dataloaded=true; 
    });
  }
}