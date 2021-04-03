import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';
import { Brand } from 'src/app/Models/Entities/Brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/brands/"
  getBrands():Observable<ListResponseModule<Brand>>{
    let newPath=this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModule<Brand>>(newPath)
}
}