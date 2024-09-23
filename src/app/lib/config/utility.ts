import { ado } from "../data/ado"
import { ekitiEast } from "../data/ekitiEast";
import { ekitiSouthWest } from "../data/ekitiSouthWest";
import { ekitiWest } from "../data/ekitiWest";
import { emure } from "../data/emure";
import { gbonyin } from "../data/gbonyin";
import { idoOsi } from "../data/idoOsi";
import { ijero } from "../data/ijero";
import { ikere } from "../data/ikere"
import { ikole } from "../data/ikole"
import { ilejemeje } from "../data/ilejemeje";
import { irepodunIfelodun } from "../data/irepodunIfelodun";
import { iseOrun } from "../data/iseOrun";
import { moba } from "../data/moba";
import { oye } from "../data/oye";

export const findFacilitiies=(lga:string)=>{
    // let facilitities=[
    //     ...ado, ...ikere, ...ikole
    // ]
    switch(lga){
        case "Ado":
        return ado;
        break;
        case "Ikere":
        return ikere;
        break;
        case "Ikole":
        return ikole;
        break;
        case "Ise/Orun":
        return iseOrun;
        break;
        case "Ise/Orun":
        return iseOrun;
        break;
        case "Gbonyin":
        return gbonyin;
        break;
        case "Ilejemeje":
        return ilejemeje;
        break;
        case "Ijero":
        return ijero;
        break;
        case "Ido-Osi":
        return idoOsi;
        break;
        case "Ekiti South West":
        return ekitiSouthWest;
        break;
        case "Ekiti East":
        return ekitiEast;
        break;
        case "Ekiti West":
        return ekitiWest;
        break;
        case "Irepodun/Ifelodun":
        return irepodunIfelodun;
        break;
        case "Emure":
        return emure;
        break;
        case "Moba":
        return moba;
        break;
        case "Oye":
        return oye;
        break;
        default:
        return ["Please choose an LGA first"];
        break;
        
    }
}
export type visitObject={
    time:String,
    day:number,
    month: number,
    year:number
}
export const formatVisits=(visits:visitObject[], year:number)=>{
    let visitsForTheYear=visits.filter(entry=>entry.year===year);
    let returnObject={
        january: visitsForTheYear.filter(visit=>visit.month===1).length,
        febuary: visitsForTheYear.filter(visit=>visit.month===2).length,
        march: visitsForTheYear.filter(visit=>visit.month===3).length,
        april: visitsForTheYear.filter(visit=>visit.month===4).length,
        may: visitsForTheYear.filter(visit=>visit.month===5).length,
        june: visitsForTheYear.filter(visit=>visit.month===6).length,
        july: visitsForTheYear.filter(visit=>visit.month===7).length,
        august: visitsForTheYear.filter(visit=>visit.month===8).length,
        september: visitsForTheYear.filter(visit=>visit.month===9).length,
        october: visitsForTheYear.filter(visit=>visit.month===10).length,
        november: visitsForTheYear.filter(visit=>visit.month===11).length,
        december: visitsForTheYear.filter(visit=>visit.month===12).length,
    }
    return returnObject;
}
export const monthlyTotals=(patients:Object[])=>{
    let returnObject={
        january: patients?.reduce((acc:number, patient:any)=>acc+patient.january, 0),
        febuary: patients?.reduce((acc:number, patient:any)=>acc+patient.febuary, 0),
        march: patients?.reduce((acc:number, patient:any)=>acc+patient.march, 0),
        april: patients?.reduce((acc:number, patient:any)=>acc+patient.april, 0),
        may: patients?.reduce((acc:number, patient:any)=>acc+patient.may, 0),
        june: patients?.reduce((acc:number, patient:any)=>acc+patient.june, 0),
        july: patients?.reduce((acc:number, patient:any)=>acc+patient.july, 0),
        august: patients?.reduce((acc:number, patient:any)=>acc+patient.august, 0),
        september: patients?.reduce((acc:number, patient:any)=>acc+patient.september, 0),
        october: patients?.reduce((acc:number, patient:any)=>acc+patient.october, 0),
        november: patients?.reduce((acc:number, patient:any)=>acc+patient.november, 0),
        december: patients?.reduce((acc:number, patient:any)=>acc+patient.december, 0),
    }
    return returnObject;
}