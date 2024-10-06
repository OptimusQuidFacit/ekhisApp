"use client"
import { adminContextType, patientContextType } from "@/ContextProvider";
import { useAdminContext, usePatientContext } from "@/customHooks";
const DateFilter = () => {
    // const date= new Date();
    const { adminYear, setAdminRange, setAdminYear}= useAdminContext() as adminContextType
    // const {LGA, facility}= usePatientContext() as patientContextType
    // console.log( adminYear);
    const handleYear=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let year=parseInt(e.target.value)
        year/1000>=1&&setAdminYear(year)
        // console.log(year/1000)
    }
    return (
            <div className="flex items-center gap-2 font-semibold justify-end">
                For:
                <input  onChange={handleYear} className="w-[70px] rounded-xl p-2" type="number" min="1900" name="year" id="year" defaultValue={adminYear} />
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