import { auth } from "../../lib/auth";
import { getPatients, getPatientsWithQuery } from "../../lib/data/patients";
import AdminDataPage from "@/components/adminComponents/AdminDataPage";


const page = async () => {
    // const date=new Date();
    // let user= await auth();
    // console.log(user);
    // let facility=null
    // let LGA= null,
    // adminYear=2024
    // const fetchPatients= async ()=>{
    //     // await getPatients(date.getFullYear());
    //     let query:any={}
    //     if(facility){
    //         query.facility=facility;
    //     }
    //     if(LGA){
    //         query.LGA=LGA;
    //     }
    //     if(facility||LGA) {
    //         let patients= await getPatientsWithQuery(query, adminYear)
    //         console.log('query fn was invoked')
    //         return patients;
    //     }
    //     else{
    //         let patients = await getPatients(adminYear);
    //         console.log("getAll fn was invoked")
    //         return patients;
    //     }
    // }
    // let patients=await fetchPatients();
    return (
        <div className="h-full w-full">
            <AdminDataPage/>
            {/* <div className="flex items-center justify-between">
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
                                        ({patients.length})
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
                                <div className="flex-[0.2]">
                                    Jul
                                    <p className="text-sm">
                                        ({patients.reduce((acc:number, patient:any)=>acc+patient.july, 0)})
                                    </p>
                                </div>
                                <div className="flex-[0.2]">
                                    Aug
                                    <p className="text-sm">
                                        ({patients.reduce((acc:number, patient:any)=>acc+patient.august, 0)})
                                    </p>
                                </div>
                                <div className="flex-[0.2]">
                                    Sep
                                    <p className="text-sm">
                                        ({patients.reduce((acc:number, patient:any)=>acc+patient.september, 0)})
                                    </p>
                                </div>
                                <div className="flex-[0.2]">
                                    Oct
                                    <p className="text-sm">
                                        ({patients.reduce((acc:number, patient:any)=>acc+patient.october, 0)})
                                    </p>
                                </div>
                                <div className="flex-[0.2]">
                                    Nov
                                    <p className="text-sm">
                                        ({patients.reduce((acc:number, patient:any)=>acc+patient.november, 0)})
                                    </p>
                                </div>
                                <div className="flex-[0.2]">
                                    Dec
                                    <p className="text-sm">
                                        ({patients.reduce((acc:number, patient:any)=>acc+patient.december, 0)})
                                    </p>
                                </div>
                            </div>
                        </header>
                        <section className="py-3 px-3">
                            {patients.map((item:any, index:number)=>
                                <PatientRow key={index}
                                index={index}
                                name={item.name}
                                NIN={item.NIN}
                                phoneNumber={item.phoneNumber}
                                LGA={item.LGA}
                                facility={item.facility}
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
            </div> */}
        </div>
    );
}

export default page;