import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModule } from '../../Models/Responses/listResponseModule';
import { Car } from 'src/app/Models/Entities/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/cars/";

  getCars():Observable<ListResponseModule<Car>>{
    let newPath = this.apiUrl + "GetAll"
    return this.httpClient.get<ListResponseModule<Car>>(newPath)
  }
  getCarDetails():Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl + "GetCarDetails"
    return this.httpClient.get<ListResponseModule<Car>>(newPath)
  }
  getCarsByCarId(carId:number):Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl + "GetById" + carId
    return this.httpClient.get<ListResponseModule<Car>>(newPath)
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl + "GetByBrandId/?id="+brandId
    return this.httpClient.get<ListResponseModule<Car>>(newPath)
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl + "GetByColorId/?id="+colorId
    return this.httpClient.get<ListResponseModule<Car>>(newPath)
  }
  getCarDetailsByCarId(carId:number):Observable<ListResponseModule<Car>>{
    let newPath=this.apiUrl + "GetcarDetailsByCarId?carId="+carId
    return this.httpClient.get<ListResponseModule<Car>>(newPath)
  }
}
