import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';
import { Brand } from 'src/app/Models/Entities/Brand';
import { ResponseModule } from 'src/app/Models/Responses/responseModule';
import { ItemResponseModel } from 'src/app/Models/Responses/itemResonseModule';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/brands/"
  getAllBrands():Observable<ListResponseModule<Brand>>{
    let newPath=this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModule<Brand>>(newPath)
}
getById(brandId : number):Observable<ItemResponseModel<Brand>>{
  let newPath = this.apiUrl + "getbyid?id=" + brandId;
  return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
}
add(brand:Brand):Observable<ResponseModule>{
  let newPath = this.apiUrl + "add"
  return this.httpClient.post<ResponseModule>(newPath, brand);
}
update(brand : Brand) : Observable<ListResponseModule<Brand>>{
  let newPath = this.apiUrl + "update";
  return this.httpClient.post<ListResponseModule<Brand>>(newPath,brand);
}
delete(brand : Brand) : Observable<ListResponseModule<Brand>>{
  let newPath = this.apiUrl + "delete";
  return this.httpClient.post<ListResponseModule<Brand>>(newPath,brand);
}
}