
import  moment from "moment";

export class OpportunityDetails {
   id: string;
  displayed: boolean = true; 
  formattedClosureDate: string; 
  formattedCreationDate: string; 
  

  constructor(
  
    public description: string,
    public creationDate: string,
    public closeDate: string,
    public attachementList: Attachement[],
    public user: OpportunityUser,
    public lead: OpportunityUser
  ) {
   // this.id = Guid.create().toString()
    
 this.formatDates()
  }

  formatDates(){
    this.formattedCreationDate = moment(new Date(this.creationDate)).locale('fr').format("Do. MMM YY")
    this.formattedClosureDate = moment(new Date(this.closeDate)).locale('fr').format("Do. MMM YY")
  }

  setId(id: string){
    this.id = id
  }


  updateValues(id : string, description: string, closureDate: string, user: OpportunityUser, lead: OpportunityUser){
    this.id = id; 
    this.closeDate = closureDate; 
    this.user = user; 
    this.lead = lead;
    this.description = description
    this.formatDates()
  }


  hide(){
    this.displayed = false
  
  }

  show(){
    this.displayed = true
  }
}

export interface Attachement {
  id: number;
  name: string;
}

export interface OpportunityUser {
  id: number;
  name: string;
}
