"use client"
import { domain, getPatients, getPatientsWithQuery } from "@/app/lib/data/patients";
// import { fetchPatients } from "@/app/lib/data/patients";
import DateFilter from "./DateFilter";
import FilterButton from "./FilterButton";
import PatientRow from "./PatientRow";
import { useEffect, useState } from "react";
import { useAdminContext, usePatientContext } from "@/customHooks";
import { adminContextType, patientContextType } from "@/ContextProvider";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";
import MonthHeaders from "./MonthHeaders";

const AdminDataPage = () => {
    const [patients, setPatients] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const {adminRange, adminYear, setAdminRange, setAdminYear}= useAdminContext() as adminContextType
    const {LGA, facility}= usePatientContext() as patientContextType
    // console.log(adminRange)
    // const router= useRouter()
    const fetchPatients= async ()=>{
            // await getPatients(date.getFullYear());
            let query:any={}
            if(facility){
                query.facility=facility;
            }
            if(LGA){
                query.LGA=LGA;
            }
            if(facility||LGA) {
                let patients= await fetch(`${domain}/api/patients/${adminYear}?query=${encodeURIComponent(JSON.stringify(query))}`)
                return patients;
            }
            let patients = await fetch(`${domain}/api/patients/${adminYear}`);
            return patients;
        }
    // const initializePatient=async()=>{
    //     let patients = await fetchPatients();
    //     console.log(patients);
    //     setPatients(patients);
    // }
    useEffect(() => {
        // setLoading(true);
        fetchPatients().then(res=>res.json()).then(res=>{
            setPatients(res);
            setLoading(false);
        })
        // revalidatePath("/admin");

    }, [adminYear, LGA, facility])
    // console.log("Hello", patients);
    
    return (
        <>
        {loading?
        <div className="w-full h-full flex justify-center items-center">
            <div className="border-white h-[25px] w-[25px] animate-spin rounded-full border-[5px] border-t-[#3A6A71]" />
        </div>:
        <>
          <div className="mt-5 flex items-center justify-between">
                <div className="flex-1">
                    <FilterButton className="text-start"/>
                </div>
                <h1 className="flex-1 text-center text-xl font-semibold justify-self-center">
                    Patient Data
                </h1>
                <div className="flex-1">
                    <DateFilter/>
                </div>
            </div>
            <div className=" w-full overflow-scroll">
                <div className="mt-3 w-full bg-white rounded-xl min-w-[1500px]">
                        <header className="py-3 px-3 rounded-t-xl bg-primary text-white">
                            <div className="flex">
                                <div className="flex-[0.2]">
                                    S/N
                                    <div>
                                        ({patients?.length})
                                    </div>
                                </div>
                                <div className="flex-[2]">
                                    Name
                                </div>
                                <div className="flex-1">
                                    NIN
                                </div>
                                <div className="flex-1">
                                    Phone Number
                                </div>
                                <div className="flex-[0.5]">
                                    LGA
                                </div>
                                <div className="flex-1">
                                    Facility
                                </div>
                                <>
                                 <MonthHeaders patients={patients} adminRange={adminRange} />
                                </>
                            </div>
                        </header>
                        <section className="py-3 px-3">
                            {patients?.map((item:any, index:number)=>
                                <PatientRow key={index}
                                index={index}
                                adminRange={adminRange}
                                name={item.name}
                                NIN={item.NIN}
                                phoneNumber={item.phoneNumber}
                                LGA={item.LGA}
                                facility={item.facility}
                                jan={item.january}
                                feb={item.febuary}
                                mar={item.march}
                                apr={item.april}
                                may={item.may}
                                jun={item.june}
                                jul={item.july}
                                aug={item.august}
                                sep={item.september}
                                oct={item.october}
                                nov={item.november}
                                dec={item.december}
                                />
                            )}
                        </section>  
                </div>
            </div>  
        </>}
        </>
    );
}

export default AdminDataPage;