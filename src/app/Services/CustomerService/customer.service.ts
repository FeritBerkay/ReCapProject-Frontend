import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModule } from 'src/app/Models/Responses/CustomerResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/customers/getall"

  getCustomers():Observable<CustomerResponseModule>{
    return this.httpClient.get<CustomerResponseModule>(this.apiUrl);
  }
}

