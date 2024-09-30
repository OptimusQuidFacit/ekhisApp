"use client"
import { useFormState } from "react-dom";
import Button from "./Button";
import { login } from "@/app/lib/controllers/user";

const LoginForm = () => {
    const [state, formAction]= useFormState(login, undefined);
    return (
        <form action={formAction}>
            <div className="mt-5 flex flex-col gap-3">
                <input className="p-3 rounded-lg" type="text" name="name" id="name" placeholder="Username"/>
                <input className="p-3 rounded-lg" type="password" name="password" id="password" placeholder="Password"/>
                <Button title="Login"/>
                {state?.error&& <p className="text-[#f00]">{state.error}</p>}
            </div>
     </form>
    );
}

export default LoginForm;