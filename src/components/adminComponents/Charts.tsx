
"use client"
import { domain } from "@/lib/data/patients";
import BarChart from "./BarChart";
import { useEffect, useState } from "react";
import { useAdminContext, usePatientContext } from "@/customHooks";
import { adminContextType, patientContextType } from "@/ContextProvider";
import { monthlyTotals } from "@/lib/config/utility";
import { LGAs } from "@/lib/data/lga";
import { queryType } from "./AdminDataPage";
import Loader from "../Loader";

const Charts = () => {
    const [patients, setPatients] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const { adminYear}= useAdminContext() as adminContextType
    // const adminYear=2024;
    // const {LGA, facility}= usePatientContext() as patientContextType
    // console.log(adminRange)
    // const router= useRouter()
    const fetchPatients= async (lgaParams?:string)=>{
            // await getPatients(date.getFullYear());
            let query:queryType={
            }
            // if(facility){
            //     query.facility=facility;
            // }
            if(lgaParams){
                query.LGA=lgaParams;
                query.raw=true
            }
            if(lgaParams) {
                let patients= await fetch(`${domain}/api/patients/${adminYear}?query=${encodeURIComponent(JSON.stringify(query))}`)
                return patients;
            }
            let patients = await fetch(`${domain}/api/patients/${adminYear}`);
            return patients;
        }
        const fetchLgas=async()=>{
            const lgasData = await Promise.all(
                LGAs.map(lga => fetchPatients(lga).then(res => res.json()))
            );
            
            return lgasData;
        }
        // console.log(fetchLgas())
        const [lgaValues, setLgaValues] = useState<any>()
        const [monthNames, setMonthNames] = useState<string[]>()
        const [monthValues, setMonthValues] = useState<number[]>()
        const [lgaCount, setLgaCount] = useState<number[]>()
        // console.log(lgaValues, monthNames, monthValues)
        // const initialize=()=>{
        //     setLgaValues(fetchLgas() as Promise<any[]>)
        // }
        useEffect(() => {
            fetchPatients().then(res=>res.json())
            .then(res=>setPatients(res))
             fetchLgas().then(res=>{setLgaValues(res)
                res&&setLgaCount(res.map(lgArray=>lgArray.reduce((acc:number, patient:any)=>acc+patient.visits.length,0)))
                setLoading(false);
                // console.log(res)
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
        //   lgaCount&&console.log(lgaValues, adminYear);
    return (
        <>
            <div className="flex-1 h-full  p-3 bg-white rounded-xl">
                {loading?
                <div className="h-full flex items-center justify-center">
                    <Loader/>
                </div>
                    :
                    <div className="h-full flex items-center justify-center">
                        <BarChart lgaCount={lgaCount as number[]}/>
                    </div>
                        }
            </div>
            <div className="flex-1 h-full p-3 bg-white rounded-xl">

            </div>
        </>
    );
}

export default Charts;