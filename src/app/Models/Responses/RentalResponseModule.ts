import { Rental } from "../Entities/Rental";
import { ResponseModule } from "./responseModule";

export interface RentalResponseModule extends ResponseModule{
    data:Rental[]
}