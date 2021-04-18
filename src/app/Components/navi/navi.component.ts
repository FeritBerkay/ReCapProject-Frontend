import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
//   log:boolean=false;
//   email = this.localStorage.get('email');
//   user:User;
//   check:boolean;
//   constructor(private localStorage:LocalstroageService, private toastrService:ToastrService, private authService:AuthService, private userService:UserService) { }

//   ngOnInit(): void {
    
//     if(localStorage.getItem("token")===null){
      
//      }else{
//       this.log=true;
//      }
  
   
//     if(this.checkToEmail()){
//        console.log(this.email)
//        console.log("off")
//       this.getByEmail(this.email == null ? this.email = "a" : this.email.toString());
      
    
//        //console.log(this.user)
    
//     }
//   }

//   logout(){
//     localStorage.removeItem("token")
//     this.log=false;
//     this.toastrService.error("cıkıs yaptınız");
//   }
//   getByUserId(email:string) {
//     this.userService
//       .getByEmail(String(this.localStorage.get('email')))
//       .subscribe((response) => {
//         this.user = response;
//       });
//   }
//   getEmail(){
//     if(this.email){
//       this.userService.getByEmail(this.email).subscribe(response=>{
//         this.user = response;
//         //console.log(this.user)
//         this.authService.getClaims(this.user.id).subscribe(response=>{
//           if(response.data.name.length>0){
//             this.localStorage.set('yetki','var')
//             //this.localStorage.set('id',this.user.id.toString())
//           }
//         })
//       })
//     }
//   }
//   checkToEmail(){
//     if(this.localStorage.get('email')){
//       return true;
//     }else{
//       return false;
//     }
// }
// getByEmail(email:string){
    
//   this.userService.getByEmail(email).subscribe(response=>{
//      this.user = response
//     console.log(this.user.firstName)
// })
// }
// }
user:User 
userId:number;
isAuthenticated:boolean
log:boolean=false;

constructor(
  private authService:AuthService,
  private toastrService:ToastrService,
  private router:Router,
  private userService:UserService
) { }

ngOnInit(): void {


  if (this.checkIfLogin()) {
    this.getUserByEmail();
    console.log("True")
    //this.getUserId();
  
  }
}


checkIfLogin(){
  if (this.authService.isAuthenticated()) {
    return true
  }else{
    return false
  }
}

// getUserId(){
//   this.userId =  this.userService.getUserByUserId()
//  }

 getUserByEmail() {
   console.log("Çalıştı ")
   this.userService.getByEmail(String(localStorage.getItem("email"))).subscribe((response) => {
     this.user = response.data;
     console.log(response)
     console.log(this.user)
     console.log("log")
   });
 }


 logout(){
   localStorage.removeItem("token")
       this.log=false;
      this.toastrService.error("cıkıs yaptınız");
    }

}
