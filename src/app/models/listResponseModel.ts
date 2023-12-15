import { Car } from "./car";
import {Color} from "./color"
import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T>{

    data: T[];

}