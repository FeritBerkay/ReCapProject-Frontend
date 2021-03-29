import { Customer } from "../Entities/Customer";
import { ResponseModule } from "./responseModule";

export interface CustomerResponseModule extends ResponseModule{
    data:Customer[]
}