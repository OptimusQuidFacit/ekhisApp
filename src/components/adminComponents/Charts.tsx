"use client"
import { domain } from "@/app/lib/data/patients";
import BarChart from "./BarChart";
import { useEffect, useState } from "react";
import { useAdminContext, usePatientContext } from "@/customHooks";
import { adminContextType, patientContextType } from "@/ContextProvider";
import { monthlyTotals } from "@/app/lib/config/utility";
import { LGAs } from "@/app/lib/data/lga";

const Charts = () => {
    const [patients, setPatients] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const {adminRange, adminYear, setAdminRange, setAdminYear}= useAdminContext() as adminContextType
    const {LGA, facility}= usePatientContext() as patientContextType
    // console.log(adminRange)
    // const router= useRouter()
    const fetchPatients= async (lgaParams?:string)=>{
            // await getPatients(date.getFullYear());
            let query:any={}
            // if(facility){
            //     query.facility=facility;
            // }
            if(lgaParams){
                query.LGA=lgaParams;
            }
            if(lgaParams) {
                let patients= await fetch(`${domain}/api/patients/${adminYear}?query=${encodeURIComponent(JSON.stringify(query))}`)
                return patients;
            }
            let patients = await fetch(`${domain}/api/patients/${adminYear}`);
            return patients;
        }
        const fetchLgas=async()=>{
            let lgas= await Promise.all(
                LGAs.map(async lga=>{
                   let result= await fetchPatients(lga)
                   return result.json();
                }
            ))
            // console.log(lgas);
            return lgas;
        }
        // console.log(fetchLgas())
        const [lgaValues, setLgaValues] = useState<any>()
        const [monthNames, setMonthNames] = useState<string[]>()
        const [monthValues, setMonthValues] = useState<number[]>()
        const [lgaCount, setLgaCount] = useState<number[]>()

        // const initialize=()=>{
        //     setLgaValues(fetchLgas() as Promise<any[]>)
        // }
        useEffect(() => {
            fetchPatients().then(res=>res.json())
            .then(res=>setPatients(res))
             fetchLgas().then(res=>{setLgaValues(res)
                res&&setLgaCount(res.map((value:any)=>value.length))
             });
            
          }, [])
          useEffect(() => {
                let names=Object.keys(monthlyTotals(patients))
                // let Total=patients?.map((patient: any)=>Object.entries(patient).slice(10).map(([key, value])=>value)
                // )
                let values = Object.values(monthlyTotals(patients))
                patients &&setMonthNames(names as string[]);
                patients&&setMonthValues(values);
          }, [])
        //   lgaValues&&console.log(lgaValues.map((value:any)=>value.length));
          lgaCount&&console.log(lgaCount);
    return (
        <>
            <div className="flex-1 h-full p-3 bg-white rounded-xl">
                <BarChart lgaCount={lgaCount as number[]}/>
            </div>
            <div className="flex-1 h-full p-3 bg-white rounded-xl">

            </div>
        </>
    );
}

export default Charts;