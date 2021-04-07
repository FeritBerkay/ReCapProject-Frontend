import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/Models/Entities/Rental';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';
import { ResponseModule } from 'src/app/Models/Responses/responseModule';

@Injectable({
  providedIn: 'root'
})
export class RentalserviceService {

  rental:Rental;
  apiUrl="https://localhost:44399/api";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModule<Rental>>
  {
    let newPath=this.apiUrl+"/rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModule<Rental>>(newPath);
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModule<Rental>>{
    let newPath=this.apiUrl+"/rentals/getrentaldetailsbycarid?id="+carId;
    return this.httpClient.get<ListResponseModule<Rental>>(newPath);
  }

  isCarAvailable(carId:number): Observable<boolean>{

    let newApiUrl = this.apiUrl + "/rentals/iscaravailable?carId=" + carId;

    return this.httpClient.get<boolean>(newApiUrl);

  }


  addRental(rental:Rental):Observable<ResponseModule>{
      let newPath=this.apiUrl+"/rentals/add";
      return this.httpClient.post<ResponseModule>(newPath,rental);
  }


  setRental(rental:Rental){
    this.rental = rental;
  }

  getRental(){
    return this.rental;
  }
}
