"use client"

import { useEffect, useState } from "react";

const FormMessage = ({error, msg}:{error:string, msg:string}) => {
    useEffect(()=>{
        
    });
    return (
        <div className="mt-5 mx-auto text-center">
        {
          error  && 
          <p className="text-xl text-[#ff0000]">
                {error}
          </p>
        }  
        {
          msg  && 
          <p className="text-xl text-[#00ff00]">
                {msg}
          </p>
        }  
    </div>
    );
}

export default FormMessage;