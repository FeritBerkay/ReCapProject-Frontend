import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claims } from 'src/app/Models/Entities/claims';
import { loginModel } from 'src/app/Models/Entities/loginModul';
import { tokenModel } from 'src/app/Models/Entities/tokenModel';
import { User } from 'src/app/Models/Entities/user';
import { ResponseModule } from 'src/app/Models/Responses/responseModule';
import { SingleResponseModule } from 'src/app/Models/Responses/singleResponseModule';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44399/api/auth"
  constructor(private httpClient:HttpClient) { }

  login(loginModel:loginModel){
    return this.httpClient.post<SingleResponseModule<tokenModel>>(this.apiUrl+"/login",loginModel)
  }
  isAuthenticated(){
    
    if (localStorage.getItem("token")) {
      return true;
  }else{
    return false;
  }

  }
  getClaims(id:number):Observable<SingleResponseModule<Claims>>{
    return this.httpClient.get<SingleResponseModule<Claims>>(this.apiUrl + 'users/claims?id='+id)
  }

  AddUser(user:User):Observable<ResponseModule>{
    return this.httpClient.post<ResponseModule>(this.apiUrl+"/register",user)
  }
}
