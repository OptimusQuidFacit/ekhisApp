// import { useAdminContext, usePatientContext } from "@/customHooks";
//@ts-nocheck
import { connectToDb } from "../config/dbconnection";
import { formatVisits } from "../config/utility";
import Patients, { patientType } from "../models/patients"
import { adminContextType, patientContextType } from "@/ContextProvider";
import { RootFilterQuery } from "mongoose";

type getPatientsFn=() => Promise<any[] | undefined>|string
export const domain="http://localhost:3000"
export const getPatients =async(year:number)=>{
    try{
        connectToDb();
        let patients= await Patients.find({}).lean<patientType[]>();
        let formattedPatients= patients.map(patient=>{
            let {visits, ...other}= patient
            let{firstName, lastName, middleName, ...rest}= other;
            let name=`${firstName} ${middleName} ${lastName}`
            let formattedVisits= formatVisits(visits, year)
            return {name, ...rest, ...formattedVisits}
        }
        )
        return formattedPatients;
    }
    catch(err:any){
        console.log(err)
        return err.message
    }
}
export const getPatientsWithQuery =async(query:RootFilterQuery<any>, year:number)=>{
    try{
        connectToDb();
        let patients= await Patients.find(query).lean<patientType[]>();
        let formattedPatients= patients.map(patient=>{
            let {visits, ...other}= patient
            let{firstName, lastName, middleName, ...rest}= other;
            let name=`${firstName} ${middleName} ${lastName}`
            let formattedVisits= formatVisits(visits, year)
            return {name, ...rest, ...formattedVisits}
        }
        )
        return formattedPatients;
    }
    catch(err:any){
        console.log(err)
        return err.message
    }
}