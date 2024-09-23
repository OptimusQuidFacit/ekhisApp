"use client"
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import Loader from "./Loader";

const Button = ({...rest}: ComponentProps<any>) => {
    const { pending } = useFormStatus();
    // useEffect(() => {
    //     console.log(pending)
    //   }, [pending]);
    return (
        <button {...rest} disabled={pending} className="mx-auto text-center mt-10 cursor-pointer component-home-background hover:border-4 border-secondary text-white py-3 px-5 rounded-xl" type="submit">
            {pending?<Loader/>:"Submit"}
        </button>
    );
}

export default Button;