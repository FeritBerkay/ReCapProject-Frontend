import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';
import { Category } from 'src/app/Models/Entities/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44399/api/categories/getall"
  getCategories():Observable<ListResponseModule<Category>>{
    return this.httpClient.get<ListResponseModule<Category>>(this.apiUrl)
  }
}
