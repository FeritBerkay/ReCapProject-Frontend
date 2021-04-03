import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/Models/Entities/Rental';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/rentals/GetRentalDetails"

  getRentals():Observable<ListResponseModule<Rental>>{
    return this.httpClient.get<ListResponseModule<Rental>>(this.apiUrl)
  }
}