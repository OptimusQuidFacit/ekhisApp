"use client"
import { useFormState } from "react-dom";
import Button from "./Button";
import { addUser } from "@/app/lib/controllers/user";

const RegisterForm = () => {
    const [state, formAction]= useFormState(addUser, undefined);
    return (
        <form action={formAction}>
            <div className="mt-5 flex flex-col gap-3">
                <input className="p-3 rounded-lg" type="text" name="name" id="name" placeholder="Username"/>
                <input className="p-3 rounded-lg" type="password" name="password" id="password" placeholder="Password"/>
                <input className="p-3 rounded-lg" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
                <Button title="Submit"/>
                <div>
                    {state?.error&& <p className="text-[#f00]">{state.error}</p>}
                    {state?.message&& <p className="text-[#0f0]">{state.message}</p>}
                </div>
            </div>
       </form>
    );
}

export default RegisterForm;