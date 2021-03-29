import { Time } from "@angular/common";
import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export interface Rental{
    rentalId:number,
    carName:string,
    brandName:string,
    colorName:string, 
    companyName:string,
    firstName:string,
    lastName:string,
    rentDate:Date,
    returnDate:Date
}   