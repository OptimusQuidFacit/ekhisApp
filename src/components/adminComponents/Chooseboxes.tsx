"use client"

import { patientContextType } from "@/ContextProvider";
import { usePatientContext } from "@/customHooks";
import { findFacilitiies } from "@/lib/config/utility";
import { LGAs } from "@/lib/data/lga";
import Choose from "./Choose";


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