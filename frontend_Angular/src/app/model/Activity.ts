import { EActivity } from "./EActivity";
import { User } from "./User";

export class Activity{
id:number;
exchangeDate:Date;
information:string;
action:EActivity;
lead:any;
repAct:any;

constructor(act,inf,d){
   this.exchangeDate=d;
    this.information=inf;
    this.action=act;
}

setLead(l){
   this.lead=l
}

setRep(r){
    this.repAct=r
}

}