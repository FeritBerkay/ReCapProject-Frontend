import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/Models/Entities/CarImage';
import { ListResponseModule } from '../../Models/Responses/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:44399/api/';

  constructor(private httpClient: HttpClient) {}

  getAllCarImages(): Observable<ListResponseModule<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListResponseModule<CarImage>>(newPath);
  }

  getCarImagesByCarId(carId: number): Observable<ListResponseModule<CarImage>> {
    let newPath = this.apiUrl + 'carimages/GetByCarId?id=' + carId;
    return this.httpClient.get<ListResponseModule<CarImage>>(newPath);
  }
}
