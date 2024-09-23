"use client"
import { patientContextType } from "@/ContextProvider";
import { usePatientContext } from "@/customHooks";
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

type props={
    options:string[],
    title:string,
}
const Choose = ({options, title}:props) => {
    const {LGA, facility, setFacility, setLGA} = usePatientContext() as patientContextType
    const [showOptions, setShowOptions] = useState(false)
    const [value, setValue] = useState<string>('')
    const formRef= useRef<HTMLInputElement>(null);
    // console.log(value);
    const chooseValue=(text:string|null)=>{
        if (title==='Facility'){
            setFacility(text)
        }
        if (title==='LGA'){
            setLGA(text)
        }
       setValue(text as string);
       setShowOptions(false);
    }
    const getValue=()=>{
        if (title==='Facility'){
            return facility;
        }
        if (title==='LGA'){
            return LGA;
        }
    }
    // console.log(facility)
    const handleClose=()=>{
        chooseValue("");
    }
    return (
        <div className="flex flex-col gap-2 items-center relative">
            {/* <label htmlFor="lga" className="font-bold text-[#34636E]">{title}</label> */}
            <input value={getValue() as string} ref={formRef} onChange={(e)=>setValue(e.target.value)} onBlur={()=>setTimeout(()=>setShowOptions(false),200)}  onFocus={()=>setShowOptions(true)} className="border-2 border-primary w-full h-[40px] max-w-[150px] p-1 md:p-5 rounded-xl" type="text" placeholder={title} name={title} id={title} />
            {getValue()&&<div className="absolute right-[5px] top-1/2 -translate-y-1/2">
                <IoClose onClick={handleClose} className="cursor-pointer text-primary text-xl"/>
            </div>}
            {showOptions&&
            <div id="lga" className="absolute left-0 top-[45px] bg-primary text-white shadow-lg border-2 border-primary">
                {
                    options.filter(item=>!value?true:item.toLowerCase().includes(value?.toLowerCase() as string))
                    .map(option=>
                        <option disabled={option==="Please choose an LGA first"?true:false} onClick={()=>chooseValue(option)} key={option} className="px-3 hover:bg-white hover:text-black cursor-pointer">{option}</option>
                    )
                }
            </div>}
        </div>
    );
}

export default Choose;