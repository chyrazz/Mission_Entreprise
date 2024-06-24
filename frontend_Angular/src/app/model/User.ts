import { ERole } from "./ERole";
import { EUserStatus } from "./EUserStatus";



export class User{
    id:number;
    name:string;
    lastname:string;
    email:string;
    password:string;
    phoneNumber1:string;
    phoneNumber2:string;
    adr:string;
    InscripDate:Date;
    status :EUserStatus ;
    role:ERole ;
}