import { Injectable } from '@angular/core';
import { Customer } from 'src/app/Models/Entities/Customer';

@Injectable({
  providedIn: 'root'
})
export class LocalstroageService {

  localStorage: Storage;
  currentCustomer: string = "currentCustomer";

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key : string){
    return this.localStorage.getItem(key);
  }

  set(key: string, value: string){
    this.localStorage.setItem(key,value);
  }

  remove(key: string){
    this.localStorage.removeItem(key);
  }

  clean(){
    this.localStorage.clear();
  }

//   getCurrentCustomer(): Customer {
//     return JSON.parse(localStorage.getItem(this.currentCustomer));
//   }
}
