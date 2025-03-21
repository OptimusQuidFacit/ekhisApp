// import { useAdminContext, usePatientContext } from "@/customHooks";
//@ts-nocheck
import { queryType } from "@/components/adminComponents/AdminDataPage";
import { connectToDb } from "../config/dbconnection";
import { formatVisits } from "../config/utility";
import Patients, { patientType } from "../models/patients"
import { adminContextType, patientContextType } from "@/ContextProvider";
import { RootFilterQuery } from "mongoose";

type getPatientsFn=() => Promise<any[] | undefined>|string
export type diagnosisType={
    name:string,
    date:string
}
export type formattedPatients={
    name: string,
    NIN: number;
    DOB: string;
    phoneNumber: number;
    LGA: string;
    facility: string;
    january: number;
    febuary: number;
    march: number;
    april: number;
    may: number;
    june: number;
    july: number;
    august: number;
    september: number;
    october: number;
    november: number;
    december: number;
    diagnosis?: diagnosisType[]
}
export const domain= "http://localhost:3000";
// export const domain="https://ekhis-app.vercel.app"

// Fetches patient data in format of monthly count when was is set to false
export const getPatients =async(year:number)=>{
    try{
        connectToDb();
        let patients= await Patients.find({"visits.year":year}).lean<patientType[]>();
        let formattedPatients= patients.map(patient=>{
            let {visits, ...other}= patient
            let{firstName, lastName, middleName, ...rest}= other;
            let name=`${firstName} ${middleName} ${lastName}`
            let formattedVisits= formatVisits(visits, year)
            let diagnosis=visits.map(visit=>({ name:visit.diagnosis, date:`${visit.day}/${visit.month}/${visit.year}`}))
            return {name, ...rest, ...formattedVisits, diagnosis}
        }
        )
        return formattedPatients;
    }
    catch(err:any){
        console.log(err)
        return err.message
    }
}
export const getPatientsWithQuery =async(query:RootFilterQuery<queryType>, year:number)=>{
    try{
        let {raw, ...relevantQuery}= query 
        connectToDb();
        let patients= await Patients.find({"visits.year":year, ...relevantQuery}).lean<patientType[]>();
        let formattedPatients= patients.map(patient=>{
            let {visits, ...other}= patient
            let{firstName, lastName, middleName, ...rest}= other;
            let name=`${firstName} ${middleName} ${lastName}`
            let formattedVisits= formatVisits(visits)
            let diagnosis=visits.map(visit=>({ name:visit.diagnosis, date:`${visit.day}/${visit.month}/${visit.year}`}))
            return {name, ...rest, ...formattedVisits, diagnosis}
        }
        )
        if(query.raw) return patients;
        return formattedPatients;
    }
    catch(err:any){
        console.log(err)
        return err.message
    }
}