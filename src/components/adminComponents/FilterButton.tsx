"use client"
import { ComponentProps, HTMLAttributes, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Chooseboxes from "../Chooseboxes";
import { usePatientContext } from "@/customHooks";
import { patientContextType } from "@/ContextProvider";

const FilterButton = ({...rest}: HTMLAttributes<HTMLDivElement>) => {
    const {facility, LGA , setLGA, setFacility}= usePatientContext() as patientContextType;
    const [show, setShow] = useState(false);
    useEffect(() => {
        if(facility||LGA){
            setShow(true);
        }
    }, [show])
    
    const clearForm=()=>{
        setFacility(null);
        setLGA(null);
    }
    const handleClose=()=>{
        clearForm()      
        setShow((prev:any)=>!prev);
    }
    return (
        <div {...rest} className="flex gap-3 items-center">
            {show&&<Chooseboxes/>}
            <div onClick={handleClose} className="cursor-pointer flex gap-2 items-center p-3 bg-[#FFB232] rounded-xl text-white">
                <p className="font-semibold w-auto">
                    {show?<IoClose/>:"Toggle Filter"}
                </p>
                <div>
                    <FaFilter/>
                </div>
            </div>
        </div>
    );
}

export default FilterButton;