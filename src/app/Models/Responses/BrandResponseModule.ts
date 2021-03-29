import { Brand } from "../Entities/Brand";
import { ResponseModule } from "./responseModule";

export interface BrandResponseModule extends ResponseModule{
    data:Brand[]
}