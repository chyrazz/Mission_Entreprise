import { LongDateFormatKey } from "moment";

export interface Contract {
    id : number;
    montant: number;
    couverts: string;
    clauseParticuliers: string;
    modeDePaiement: string;
    Remarques: string;
    StartDate: Date;
    EndDate: Date
}