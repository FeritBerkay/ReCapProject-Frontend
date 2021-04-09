import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/Models/Entities/Color';
import { ItemResponseModel } from 'src/app/Models/Responses/itemResonseModule';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';
import { ResponseModule } from 'src/app/Models/Responses/responseModule';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/colors"

  getAllColors():Observable<ListResponseModule<Color>>{
    let newPath=this.apiUrl + "/getall"
    return this.httpClient.get<ListResponseModule<Color>>(newPath);
  }
  getById(id:number):Observable<ItemResponseModel<Color>>{
    let newPath=this.apiUrl + "/GetById?id=" + id
    return this.httpClient.get<ItemResponseModel<Color>>(newPath);
  }
  add(color:Color):Observable<ResponseModule>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModule>(newPath, color);
  }
  delete(color:Color):Observable<ResponseModule>{
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseModule>(newPath, color);
  }
  update(color:Color):Observable<ResponseModule>{
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<ResponseModule>(newPath, color);
  }
}
