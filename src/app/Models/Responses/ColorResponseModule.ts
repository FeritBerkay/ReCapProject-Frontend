import { Color } from "../Entities/Color";
import { ResponseModule } from "./responseModule";

export interface ColorResponseModule extends ResponseModule{
    data:Color[]
}