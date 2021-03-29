import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CategoryResponseModule } from 'src/app/Models/Responses/categoryResponseModule';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/categories/getall"
  getCategories():Observable<CategoryResponseModule>{
    return this.httpClient.get<CategoryResponseModule>(this.apiUrl)
  }
}
