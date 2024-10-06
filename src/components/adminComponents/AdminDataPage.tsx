
"use client"
import { domain, formattedPatients } from "@/app/lib/data/patients";
// import { fetchPatients } from "@/app/lib/data/patients";
import DateFilter from "./DateFilter";
import FilterButton from "./FilterButton";
import PatientRow from "./PatientRow";
import { useEffect, useState } from "react";
import { useAdminContext, usePatientContext } from "@/customHooks";
import { adminContextType, patientContextType } from "@/ContextProvider";
import MonthHeaders from "./MonthHeaders";
import ExportToExcel from "./ExcelExport";


export type queryType={
    facility?:string,
    LGA?:string
}
const AdminDataPage = () => {
    // useEffect(() => {
    //     let theme = localStorage.getItem('theme');
    //     console.log("This is the theme:", theme);
    //     document.documentElement.classList.add("light");
    //     document.documentElement.classList.remove('dark'); // Ensure dark mode is not active
    //   }, []);


    const [patients, setPatients] = useState<formattedPatients[]|null>(null)
    const [loading, setLoading] = useState(true)
    const {adminRange, adminYear}= useAdminContext() as adminContextType
    const {LGA, facility}= usePatientContext() as patientContextType
    // console.log(adminRange)
    // const router= useRouter()
  
    const fetchPatients= async ()=>{
            // await getPatients(date.getFullYear());
            const query:queryType={}
            if(facility){
                query.facility=facility;
            }
            if(LGA){
                query.LGA=LGA;
            }
            if(facility||LGA) {
                const patients= await fetch(`${domain}/api/patients/${adminYear}?query=${encodeURIComponent(JSON.stringify(query))}`)
                return patients;
            }
            const patients = await fetch(`${domain}/api/patients/${adminYear}`);
            return patients;
        }
    // const initializePatient=async()=>{
    //     let patients = await fetchPatients();
    //     console.log(patients);
    //     setPatients(patients);
    // }
    useEffect(() => {
        setLoading(true);
        adminYear&&fetchPatients()
        .then((res:any)=>res.ok&&res.json())
        .then(res=>{
                let filteredRes=res?.filter((patient:formattedPatients)=>Object.values(patient).slice(10).some((value)=>value as number>0))
                // console.log(filteredRes.length);
                setPatients(filteredRes);
                setLoading(false);
            
        })
        .catch(err=>{throw new Error(err)});
        // revalidatePath("/admin");

    }, [adminYear, LGA, facility])
    // console.log("Hello", patients);
    
    return (
        <>      
        <div className="pt-5 h-full">
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
            <>
            {
                loading?
                <div className="w-full h-full flex justify-center items-center">
                    <div className="border-white h-[25px] w-[25px] animate-spin rounded-full border-[5px] border-t-[#3A6A71]" />
                </div>
                :
                <div className="mt-5 h-4/5 w-full bg-white rounded-xl min-w-[1100px] overflow-hidden">
                        <header className="py-3 px-3 rounded-t-xl bg-primary text-white">
                            <div className="flex">
                                <div className="flex-[0.2] font-semibold">
                                    S/N
                                </div>
                                <div className="flex-[1.5]">
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
                                <div className="flex-1 me-[10px]">
                                    Facility
                                </div>
                                <>
                                 <MonthHeaders patients={patients as formattedPatients[]} adminRange={adminRange} />
                                </>
                            </div>
                        </header>
                        <section className="py-3 px-3 overflow-y-scroll h-[78%]">
                            {patients?.length?
                            patients?.map((item:any, index:number)=>
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
                            ):
                            <p className="text-grey">Opps! No patient data for this Period</p>}
                        </section>
                <section className="text-center mt-2">
                    {patients?.length as number>0 && <ExportToExcel patients={patients as formattedPatients[]}/>}
                </section>
                </div>
            }
            </>  
        </div>
        </>
    );
}

export default AdminDataPage;