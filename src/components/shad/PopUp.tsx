import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { diagnosisType } from "@/lib/data/patients";
// import { ReactElement } from "react";

  
interface props {
    show:boolean
    name:string
    diagnosis:diagnosisType[]
}
const PopUp = ({show, name, diagnosis}:props) => {
    return (
        <AlertDialog open={show}>
        <AlertDialogTrigger>{name}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
                <span className="underline mr-[1ch]">
                    {name}
                </span>
                had the following reason(s) for visit:
            </AlertDialogTitle>
            <AlertDialogDescription>
                {diagnosis?.map((item, index)=>
                    <div className="flex gap-2 my-1 font-semibold" key={index}>
                        <p className="">{index+1}. </p>
                        <p>{item.name}</p>
                        <p>{item.date}</p>
                    </div>
                )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
    );
}

export default PopUp;