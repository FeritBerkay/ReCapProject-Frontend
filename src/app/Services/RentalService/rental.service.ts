import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModule } from 'src/app/Models/Responses/RentalResponseModule';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/rentals/GetRentalDetails"

  getRentals():Observable<RentalResponseModule>{
    return this.httpClient.get<RentalResponseModule>(this.apiUrl)
  }
}