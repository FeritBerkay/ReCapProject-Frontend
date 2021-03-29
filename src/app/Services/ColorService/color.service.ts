import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModule } from 'src/app/Models/Responses/ColorResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/colors/getall"

  getColors():Observable<ColorResponseModule>{
    return this.httpClient.get<ColorResponseModule>(this.apiUrl);
  }
}
