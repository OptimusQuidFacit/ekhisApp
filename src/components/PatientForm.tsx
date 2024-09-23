"use client"
import { submitForm } from "@/app/lib/controllers/patientActions";
import { useEffect, useRef, useState } from "react";
import { useFormState} from "react-dom";
import Button from "./Button";
import { usePatientContext } from "@/customHooks";
import { patientContextType } from "@/ContextProvider";
import FormMessage from "./FormMessage";

const PatientForm = () => {
    const [state, formAction]= useFormState(submitForm, null)
    const [day, setDay] = useState<number>();
    const [month, setMonth] = useState<number>();
    const [year, setYear] = useState<number>();
    const handleVisit=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value.split("-"));
        let date=e.target.value.split("-")
        setYear(parseInt(date[0]))
        setMonth(parseInt(date[1]))
        setDay(parseInt(date[2]))
    }
    // const { pending } = useFormStatus();
    const {facility,  LGA}= usePatientContext() as patientContextType;
    const formRef= useRef<HTMLFormElement>(null);
    
    // Info for realtime values
    
    // const date= new Date();
    // const timeArr=[date.getHours(), date.getMinutes(), date.getSeconds()]
    // let patientVisit = {
    //     time:`${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`,
    //     day: date.getDate(), 
    //     month: date.getMonth()+1,
    //     year: date.getFullYear()
    // }
    // console.log(date.getHours(), date.getMinutes(), date.getSeconds())

    useEffect(() => {
        if (state?.msg && formRef.current) {
            formRef.current.reset(); // Reset the form
            console.log('Form has been reset');
        }
    }, [state?.msg]); // Effect triggered when state.msg changes

    //Take out the message after three seconds
    const [msgShown, setMsgShown] = useState(true)
    useEffect(()=>{
       setTimeout(()=>setMsgShown(false), 3000);
    }, [state?.msg]);
    
    return (       
        <form onSubmit={()=>setMsgShown(true)} ref={formRef} action={formAction} className="w-full flex flex-col items-center">
            <div className="w-4/5 h-3/5 grid md:grid-cols-2 justify-items-center items-center gap-4 md:gap-7">
                <div>
                <input className="p-5 rounded-xl h-[50px] w-[200px]" placeholder="First Name" type="text" name="firstName" id="firstName" />
                </div>
                <div>
                <input className="p-5 rounded-xl h-[50px] w-[200px]" placeholder="Last Name" type="text" name="lastName" id="lastName" />
                </div>
                <div>
                <input className="p-5 rounded-xl h-[50px] w-[200px]" placeholder="Middle Name" type="text" name="middleName" id="middleName" />
                </div>
                <div>
                <input className="p-5 rounded-xl h-[50px] w-[200px]" placeholder="NIN" type="number" name="NIN" id="NIN" />
                </div>
                <div>
                <input className="p-5 rounded-xl h-[50px] w-[200px]" placeholder="Phone Number" type="number" name="phoneNumber" id="phoneNumber" />
                </div>
                <div>
                <label className="block text-primary" htmlFor="DOB">
                    (Date of birth)
                </label>
                <input className="p-5 rounded-xl h-[50px] w-[200px]" placeholder="Date of Birth" type="date" name="DOB" id="DOB" />
                </div>
                <div>
                <label  className="block text-primary" htmlFor="DOV">
                    (Date of visit)
                </label>
                <input onChange={handleVisit} className="p-5 rounded-xl h-[50px] w-[200px]" placeholder="Date of Visit" type="date" name="DOV" id="DOV" />
                </div>
                <input  value={LGA as string} type="hidden" name="LGA" id="LGA" />
                <input value={facility as string} type="hidden" name="facility" id="Facility" />
                
                {/* For real time submission */}
                {/* <>
                <input value={patientVisit.day} type="hidden" name="day" id="day" />
                <input value={patientVisit.month} type="hidden" name="month" id="month" />
                <input value={patientVisit.year} type="hidden" name="year" id="year" />
                <input value={patientVisit.time} type="hidden" name="time" id="year"/>
                </> */}
                <>
                <input value={day} type="hidden" name="day" id="day" />
                <input value={month} type="hidden" name="month" id="month" />
                <input value={year} type="hidden" name="year" id="year" />
                {/* <input value={patientVisit.time} type="hidden" name="time" id="year"/> */}
                </>
            </div>
            <div className="mx-auto text-center mt-4 md:mt-10">
                <Button />
            </div>
            {   
                msgShown && <FormMessage error={state?.error as string} msg={state?.msg as string}/>
            }
        </form>
    );
}

export default PatientForm;