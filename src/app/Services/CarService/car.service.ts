import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarResponseModule } from '../../Models/Responses/CarResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/cars/GetCarDetails";

  getCars():Observable<CarResponseModule>{
    return this.httpClient.get<CarResponseModule>(this.apiUrl)
  }
}
