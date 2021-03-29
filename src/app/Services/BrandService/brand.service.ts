import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BrandResponseModule } from 'src/app/Models/Responses/BrandResponseModule';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/brands/getall"
  getBrands():Observable<BrandResponseModule>{
    return this.httpClient.get<BrandResponseModule>(this.apiUrl)
}
}