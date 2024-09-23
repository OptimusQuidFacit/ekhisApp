"use client"

import { adminContextType, patientContextType } from "@/ContextProvider";
import { useAdminContext, usePatientContext } from "@/customHooks";
const DateFilter = () => {
    // const date= new Date();
    const {adminRange, adminYear, setAdminRange, setAdminYear}= useAdminContext() as adminContextType
    const {LGA, facility}= usePatientContext() as patientContextType
    console.log(LGA, facility, adminRange, adminYear);
    return (
            <div className="flex items-center gap-2 font-semibold justify-end">
                For:
                <input onChange={(e)=>setAdminYear(parseInt(e.target.value))} className="w-[60px] rounded-xl p-2" type="text" name="year" id="year" defaultValue={adminYear} />
                Between: 
                <select onChange={(e)=>setAdminRange(parseInt(e.target.value))} className="rounded-xl p-2" name="range" id="range">
                    <option value={1}>
                        Jan - Jun
                    </option>
                    <option value={2}>
                        Jul - Dec
                    </option>
                </select>
            </div>
            );
            }

export default DateFilter;