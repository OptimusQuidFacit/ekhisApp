"use client"
import { diagnosisType } from "@/app/lib/data/patients";
import { useState } from "react";

type props={
    adminRange:number
    index:number,
    name:string,
    NIN: string|number,
    phoneNumber:string|number,
    LGA:string,
    facility:string,
    jan?:number,
    feb?:number,
    mar?:number,
    apr?:number,
    may?:number,
    jun?:number,
    jul?:number,
    aug?:number,
    sep?:number,
    oct?:number,
    nov?:number,
    dec?:number,
    diagnosis:diagnosisType[]
}
const PatientRow = (props:props) => {
    const [showDiagnosis, setShowDiagnosis] = useState(false)
    // console.log("row componeent", props.adminRange)
    return (
        <div className="text-sm flex my-3 w-full relative overflow-visible">
            {showDiagnosis&&
                <div className="z-50 absolute top-[50%] left-2 bg-primary text-white rounded-xl p-3">
                    {
                        props.diagnosis.map((item, index)=>
                            <div className="flex gap-2 my-1 font-semibold" key={index}>
                                <p className="">{index+1}. </p>
                                <p>{item.name}</p>
                                <p>{item.date}</p>
                            </div>
                        )
                    }
                </div>
            }
            <div className="flex-[0.2] font-semibold">
                {props.index+1}
            </div>
            <div onClick={()=>setShowDiagnosis(prev=>!prev)} className="flex-[1.5] cursor-pointer">
                {props.name}
            </div>
            <div className="flex-1">
                {props.NIN}
            </div>
            <div className="flex-1">
                {props.phoneNumber}
            </div>
            <div className="flex-[0.5]">
                {props.LGA}
            </div>
            <div className="flex-1 me-[10px]">
                {props.facility}
            </div>
            <div className="flex-[0.2] text-center">
                {props.adminRange===2?props.jul:props.jan}
            </div>
            <div className="flex-[0.2] text-center">
                {props.adminRange===2?props.aug:props.feb}
            </div>
            <div className="flex-[0.2] text-center">
                {props.adminRange===2?props.sep:props.mar}
            </div>
            <div className="flex-[0.2] text-center">
                {props.adminRange===2?props.oct:props.apr}
            </div>
            <div className="flex-[0.2] text-center">
                {props.adminRange===2?props.nov:props.may}
            </div>
            <div className="flex-[0.2] text-center">
                {props.adminRange===2?props.dec:props.jun}
            </div>
        </div>
    );
}

export default PatientRow;