import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/Entities/user';
import { AuthService } from 'src/app/Services/authService/auth.service';
import { LocalstroageService } from 'src/app/Services/localstroageService/localstroage.service';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  log:boolean=false;
  email = this.localStorage.get('email');
  user:User;
  check:boolean;
  constructor(private localStorage:LocalstroageService, private toastrService:ToastrService, private authService:AuthService, private userService:UserService) { }

  ngOnInit(): void {
    
    if(localStorage.getItem("token")===null){
      
    }else{
      this.log=true;
    }

  }

  logout(){
    localStorage.removeItem("token")
    this.log=false;
    this.toastrService.error("cıkıs yaptınız");
  }

  getEmail(){
    if(this.email){
      this.userService.getByEmail(this.email).subscribe(response=>{
        this.user = response;
        this.authService.getClaims(this.user.id).subscribe(response=>{
          if(response.data.name.length>0){
            this.localStorage.set('yetki','var')
            //this.localStorage.set('id',this.user.id.toString())
          }
        })
      })
    }
  }
  checkToEmail(){
    if(this.localStorage.get('token')){
      return true;
    }else{
      return false;
    }
}
}
