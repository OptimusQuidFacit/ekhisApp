"use client"
import { useFormStatus } from "react-dom";
import Loader from "../Loader";

const Button = ({title}:{title:string}) => {
    const {pending}= useFormStatus()
    return (
        <button className="rounded-lg bg-primary text-white p-3">
            {pending?<Loader/>: title}
        </button>
    );
}

export default Button;