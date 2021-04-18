import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tokenModel } from 'src/app/Models/Entities/tokenModel';
import { User } from 'src/app/Models/Entities/user';
import { LocalstroageService } from 'src/app/Services/localstroageService/localstroage.service';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup
  email:string = "";
  password:FormControl
  user:User
  status:string
  token:tokenModel


  constructor(private userService:UserService,
              private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private localStorage:LocalstroageService) { }

  ngOnInit(): void {
    this.load();
    this.getUserInfo()
  }

  load(){
    this.createProfileAddForm();
    //this.token = localStorage.getItem('token')
    this.getUser();
  }

  createProfileAddForm(){
    this.profileForm=this.formBuilder.group({
      id:this.user.id,
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      status:true
    })
  }

  getUser(){
      if(this.email){
        this.userService.getByEmail(this.email).subscribe(response=>{
        console.log(response)  
        },responseError=>{
          this.toastrService.error(responseError.error);
        })
      }
  }

  getUserInfo() {
    this.userService
      .getByEmail(String(this.localStorage.get('email')))
      .subscribe((response) => {
        this.user = response.data;
        response.data.forEach((data:any) => {
          this.localStorage.set('firstName', data.firstName);
          this.localStorage.set('lastName', data.lastName);
          this.localStorage.set('passwordHash', data.passwordHash);
          this.localStorage.set('passwordSalt', data.passwordSalt);
          this.localStorage.set('userId', data.userId);
          this.localStorage.set('findexpoint', data.findexPoint);
          console.log(data)
        });
      });
  }
  updateProfile(){
    if(this.profileForm.valid){
      let profileModel = Object.assign({},this.profileForm.value)
      this.userService.profileUpdate(profileModel).subscribe(response=>{
        this.toastrService.success(response.message);
      },responseError=>{
       this.toastrService.error(responseError.error);
      });
    }else{
      this.toastrService.error("Formu Boş Bıraktınız")
    }
  }

}
