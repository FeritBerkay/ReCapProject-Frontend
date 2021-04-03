import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/Models/Entities/Color';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/colors"

  getColors():Observable<ListResponseModule<Color>>{
    let newPath=this.apiUrl + "/getall"
    return this.httpClient.get<ListResponseModule<Color>>(newPath);
  }
}
