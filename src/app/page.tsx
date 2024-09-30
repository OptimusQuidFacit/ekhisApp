import PatientForm from "@/components/PatientForm";

import Chooseboxes from "@/components/Chooseboxes";
import { revalidatePath } from "next/cache";
// import { auth } from "./lib/auth";
export default function Home() {

  // console.log(LGAs.length)
  // console.log(domain);
  revalidatePath('/');
  return (
    <div className="h-full flex justify-center">
      <div className="bg-white rounded-3xl md:w-4/5 md:h-4/5 flex flex-col">
        <section className="md:flex items-center p-5 md:p-10">
          <div className="w-full md:w-1/2">
            <h1 className=" text-primary mx-auto text-center md:text-start">
              <div>
               Welcome!
              </div>
              <div className="text-primary font-bold text-3xl">
                Start Patient Information
              </div>
            </h1>
          </div>
          <div className="justify-center items-center md:w-1/2 md:border-l-4 pt-5 md:p-3">
            <h2 className="font-bold text-xl text-primary hidden md:block">
              Tell Us More...
            </h2>
            <div className="flex items-center justify-center pt-5 gap-3">   
                <Chooseboxes/>           
            </div>
          </div>
        </section>
        {/* next section */}
        <section className="bg-[#EFF4FA] flex-1 rounded-b-3xl p-5 md:p-10">
          <PatientForm/>
        </section>

      </div>
    </div>
  );
}
