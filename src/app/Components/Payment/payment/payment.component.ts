import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/Models/Entities/Rental';
import { RentalserviceService } from 'src/app/Services/rental/rentalservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  paymentAddForm:FormGroup;
  cartTotal:number;
  customerId:number;
  cardId: number;
  saveCard:boolean;

  rentalInfo:Rental;

 

  constructor(private formBuilder:FormBuilder,
   
    private rentalService:RentalserviceService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    // this.cartService.data
    //   .subscribe((response) => {
    //       this.cartTotal = response.cartTotal;
    //       this.customerId = response.customerId;
    //   })
      

    this.createPaymentAddForm();
    //this.getCardList();

    this.getRental();
  }

  createPaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      cardOwnerName:["",Validators.required],
      cardNumber: ["",Validators.required],
      cardExpirationDate :["", Validators.required],
      cardCvv:["",Validators.required],
      saveCard:[""]
    })
  }

  addPayment(){

    
    if(this.paymentAddForm.valid){

      let paymentModel = Object.assign({}, this.paymentAddForm.value);
      paymentModel.customerId = this.customerId;
      paymentModel.total = this.cartTotal;
      paymentModel.cardId = this.customerId + this.cartTotal;
      paymentModel.paymentDate = new Date().toISOString().slice(0,10);

      if(typeof(paymentModel.cardId) === "string"){
        paymentModel.cardId = parseInt(paymentModel.cardId);
      }

      if(typeof(paymentModel.customerId) === "string"){
        paymentModel.customerId = parseInt(paymentModel.customerId);
      }
           this.rentalService.addRental(this.rentalInfo)
           .subscribe((resp) => {
            this.toastrService.success("Arac?? Kiralad??n??z!")
            console.log(resp.message, "Arac?? Kiralad??n??z!");
           }, respError => {
             console.log(respError)
             this.toastrService.error("Arac?? Kiralama ????lemi Ba??ar??s??z Belirtilen Tarihlerde Arac Kiralanm????!")
           })
   
    }
    // else{
    //   this.toastrService.error("L??tfen t??m alanlar?? doldurunuz!", "Bo?? Alan Var!")
    // }

  }

  // setCurrentCard(card:Card){
  //   this.paymentAddForm.setValue({
  //     cardOwnerName : card.cardOwnerName,
  //     cardNumber : card.cardNumber,
  //     cardExpirationDate : card.cardExpirationDate,
  //     cardCvv : card.cardCvv,
  //     saveCard : false,
  //   })
  //   this.cardId = card.id
  // }

  // getCardList() {
  //   this.paymentService.getByCustomerId(1)
  //     .subscribe((response) => {
  //       this.cards = response.data;
  //     })
  // }

  getRental(){
    this.rentalInfo = this.rentalService.getRental();
    console.log(this.rentalInfo)
    // console.log(this.rentalInfo.carId);
    // console.log(typeof(this.rentalInfo.carId));

    // if(typeof(this.rentalInfo.customerId) == "string"){
    //   this.rentalInfo.customerId = parseInt(this.rentalInfo.customerId);
    // }

    // if(typeof(this.rentalInfo.rentDate) == "string"){
    //   this.rentalInfo.rentDate = new Date(this.rentalInfo.rentDate);
    // }

    // if(typeof(this.rentalInfo.returnDate) == "string"){
    //   this.rentalInfo.returnDate = new Date(this.rentalInfo.returnDate);
    // }

  }
}
