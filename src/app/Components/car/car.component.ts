import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  filterText="";
  constructor(private carsService:CarService, private activatedRoute:ActivatedRoute , private router: Router) { }
  //Ctor yapısı calısınca direk calısır. Ama ctor yaısı sadece insalitize etmek icin kullanılan bir yapı. Newleme yapılır burayla karıstırma ama mantık ozunde benzer.
  //ngonit component i don yerleştirir.
  ngOnInit(): void {
     //Assagıdaki kodta routurımızda categoryId varmı diye baktık eger varsa categoriye gore getir dedik. Yoksa dumduk getir.
     this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
          this.getCarsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
  }
 //Postamndakini buraya yapıyorsun. Apıye baglandık.
  getCars(){
    //subscribe asenkron calışır. Kendi icinde senkron.
    this.carsService.getCarDetails()
    .subscribe(response=>{
      this.cars = response.data;
      this.dataloaded=true;
    });
  }
  getCarsByBrandId(brandId:number){
    this.carsService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      console.log(response.data)
      this.dataloaded = true
    })
  }
  getCarsByColorId(colorId:number){
    this.carsService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataloaded=true
    })
  }
  goToImage(carId: number) {
    this.router.navigate(['./carimage', carId]);
  }
}