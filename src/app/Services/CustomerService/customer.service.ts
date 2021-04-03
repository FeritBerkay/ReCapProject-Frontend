import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Models/Entities/Customer';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/customers/getall"

  getCustomers():Observable<ListResponseModule<Customer>>{
    return this.httpClient.get<ListResponseModule<Customer>>(this.apiUrl);
  }
}

