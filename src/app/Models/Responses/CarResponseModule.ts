import { Car } from "../Entities/Car";
import { ResponseModule } from "./responseModule";

export interface CarResponseModule extends ResponseModule{
    data:Car[];
} 