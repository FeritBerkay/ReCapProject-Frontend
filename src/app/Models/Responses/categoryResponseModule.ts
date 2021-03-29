import { Category } from "../Entities/category";
import { ResponseModule } from "./responseModule";

export interface CategoryResponseModule extends ResponseModule{
    data:Category[]
}