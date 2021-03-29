import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Entities/Customer';
import { CustomerService } from 'src/app/Services/CustomerService/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  constructor(private customerService:CustomerService ) { }

  ngOnInit(): void {
    this.getCustomers();
  }
getCustomers(){
  this.customerService.getCustomers()
  .subscribe(
    response=>{
      this.customers=response.data
     }
  )
  }
}
