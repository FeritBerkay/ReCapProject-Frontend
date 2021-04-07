import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Models/Entities/Car';
import { CarImage } from 'src/app/Models/Entities/CarImage';
import { Customer } from 'src/app/Models/Entities/Customer';
import { CarImageService } from 'src/app/Services/CarImageService/car-image.service';
import { CarService } from 'src/app/Services/CarService/car.service';
import { CustomerService } from 'src/app/Services/CustomerService/customer.service';
import { RentalserviceService } from 'src/app/Services/rental/rentalservice.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm:FormGroup;
  customersDetails : Customer[];
  carDetail: Car;
  
  rentDate: Date;
  returnDate: Date;
  totalPrice:number;

  carImages : CarImage[];

  constructor(private rentalService:RentalserviceService,
    private formBuilder:FormBuilder,
    private activetedRoute:ActivatedRoute,
    private customerService:CustomerService,
    private carService:CarService,
    private carImageService:CarImageService,
    ) { }

  ngOnInit(): void {
    this.createRentalAddForm();
    this.getCustomersDetail();

    this.activetedRoute.params
      .subscribe((param) => {
        if(param["carId"]){
          this.getCarDetailByCarId(param["carId"]);
        }
      })
    
      this.getCarImagesCarId();
  }

  getCustomersDetail(){
    this.customerService.getCustomers()
      .subscribe((response) => {
        this.customersDetails = response.data;
      })
  }

  getCarDetailByCarId(carId: number){
    this.carService.getCarDetailsByCarId(carId)
    .subscribe((response) => {
      this.carDetail = response.data[0];
    });
  }

  getCarImagesCarId(){
    this.carImageService.getCarImagesByCarId(this.activetedRoute.snapshot.params["carId"])
      .subscribe((response)=> {
        this.carImages = response.data;
      })
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId: [""],
      customerId:["", Validators.required],
      rentDate:["", Validators.required],
      returnDate:[""],
    });
  }

  takeRental(){
    if(this.rentalAddForm.valid){

      let rentalModel = Object.assign({}, this.rentalAddForm.value);
      rentalModel.carId = this.carDetail.carId;
      //rentalModel.brandName = this.carDetail.brandName;
      //rentalModel.colorName = this.carDetail.colorName;
     // rentalModel.description = this.carDetail.description;
      //rentalModel.modelYear = this.carDetail.modelYear;
      //rentalModel.dailyPrice = this.carDetail.dailyPrice;
      //rentalModel.totalPrice = this.totalPrice;
      //rentalModel.carImages = this.carImages;

      //Araç kiralama bilgilerinin eklenmesi
      rentalModel.rentDate = this.rentalAddForm.value.rentDate;
      rentalModel.returnDate = this.rentalAddForm.value.returnDate;
      rentalModel.customerId = this.customersDetails[0].customerId;
      this.rentalService.setRental(rentalModel);
      console.log(rentalModel)

      //Sepete eklenmesi
      // this.cartService.addToCart(rentalModel);
      // this.toastrService.info("Sepete eklendi", this.carDetail.carName);
    }
    // else{
    //   this.toastrService.error("Lütfen ilgili yerleri doldurunuz", "Hata!");
    // }

  }

  calcTotalPrice(){
    let startDate = new Date(this.rentalAddForm.value.rentDate);
    let endDate = new Date(this.rentalAddForm.value.returnDate);

    if( isNaN(startDate.getTime()) || isNaN(endDate.getTime()) ){
      this.totalPrice = 0;
    }
    else if(startDate > endDate){
      this.totalPrice = 0;
    }
    else{
      let dateDiff = Math.floor((endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24);
      this.totalPrice = dateDiff * this.carDetail.dailyPrice;
    }
  }
}
