import { Time } from "@angular/common";
import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export interface Rental{
    rentalId?:number;
    carId:number;
    brandName : string;
    colorName:string;
    carDailyPrice : number;
    carDescription : string;
    customerId : number;
    rentDate : Date;
    returnDate:Date;
}   