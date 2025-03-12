import Button from "@/components/authComponents/Button";
import LoginForm from "@/components/authComponents/LoginForm";

const page = () => {
    return (
        <div className="flex justify-center h-full">
          <div className="rounded-xl">
            <div className="glass p-6 rounded-lg shadow-lg backdrop-blur-lg bg-white/30 border border-white/30">
             <h1 className="text-white text-xl">
                Login
             </h1>
             <LoginForm/>
            </div>
          </div>
        </div>
    );
}

export default page;