"use client"
import { useContext } from "react"
import { adminContext, patientContext } from "./ContextProvider"

export const usePatientContext=()=>{
    const context = useContext(patientContext);
    if(context){
        return context
    }
}
export const useAdminContext=()=>{
    const context = useContext(adminContext);
    if(context){
        return context;
    }
}