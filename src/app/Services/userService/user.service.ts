import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/Entities/user';
import { ListResponseModule } from 'src/app/Models/Responses/listResponseModule';
import { ResponseModule } from 'src/app/Models/Responses/responseModule';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44399/api/users"
  constructor(private httpClient:HttpClient) { }

  getByEmail(email:string):Observable<User>{
    return this.httpClient.get<User>(this.apiUrl + 'users/email?email='+email);
  }

  getUsers():Observable<ListResponseModule<User>>{
    return this.httpClient.get<ListResponseModule<User>>(this.apiUrl + 'users')
  }

  profileUpdate(user:User):Observable<ResponseModule>{
    console.log(user)
    return this.httpClient.post<ResponseModule>(this.apiUrl + 'users/updateprofile', {
      user:{
        'id':user.id,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
      },
      password:user.password
    });
  }

  // fakeFindeks(findeksModel:FakeFindeksModel):Observable<SingleResponseModel<FakeFindeksModel>>{
  //   return this.httpClient.post<SingleResponseModel<FakeFindeksModel>>(this.apiUrl+'users/getuserfindeks',findeksModel)
  // }

}
