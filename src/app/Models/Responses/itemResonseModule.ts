import { ResponseModule } from "./responseModule";

export interface ItemResponseModel<T>  extends ResponseModule{
    data:T
}