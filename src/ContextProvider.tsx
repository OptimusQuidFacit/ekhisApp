"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

export type patientContextType= {
    LGA: string|null,
    facility: string|null,
    setLGA: Dispatch<SetStateAction<string | null>>
    setFacility: Dispatch<SetStateAction<string | null>>
}
export type adminContextType={
    adminRange:number,
    setAdminRange: Dispatch<SetStateAction<number>>,
    adminYear:number,
    setAdminYear: Dispatch<SetStateAction<number>>,
}

export const patientContext = createContext<patientContextType | undefined>(undefined);
export const adminContext = createContext<adminContextType | undefined>(undefined);

export const ContextProvider = ({children}: {children:ReactNode}) => {
    const [LGA, setLGA] = useState<string|null>(null)
    const [facility, setFacility] = useState<string|null>(null)

    //admin related global states
    const date= new Date();
    const [adminRange, setAdminRange] = useState(1)
    const [adminYear, setAdminYear] = useState<number>(date.getFullYear());

    useEffect(() => {
        localStorage.setItem('theme', "light");
        document.documentElement.classList.remove('dark'); // Ensure dark mode is not active
      }, []);
    return (
       <patientContext.Provider value={{LGA, facility, setFacility, setLGA}}>
            <adminContext.Provider value={{adminRange, adminYear, setAdminYear, setAdminRange}}>
                {children}
            </adminContext.Provider>
       </patientContext.Provider>
    );
}

export default ContextProvider;