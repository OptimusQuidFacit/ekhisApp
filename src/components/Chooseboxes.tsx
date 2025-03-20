"use client"
import { LGAs } from "@/lib/data/lga";
import Choose from "./Choose";
import { usePatientContext } from "@/customHooks";
import { patientContextType } from "@/ContextProvider";
import { findFacilitiies } from "@/lib/config/utility";

const Chooseboxes = () => {
    const {LGA}= usePatientContext() as patientContextType;
    return (
        <>
            <div>
                <Choose  title="LGA" options={LGAs}/>
            </div>
            <div>
                <Choose title="Facility" options={findFacilitiies(LGA as string) as string[]}/>
            </div>
        </>
    );
}

export default Chooseboxes;