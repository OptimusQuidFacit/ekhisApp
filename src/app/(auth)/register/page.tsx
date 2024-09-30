import RegisterForm from "@/components/authComponents/RegisterForm";


const page = () => {
  
    return (
        <div className="flex items-center justify-center h-full">
          <div className="rounded-xl">
            <div className="glass p-6 rounded-lg shadow-lg backdrop-blur-lg bg-white/30 border border-white/30">
             <h1 className="text-white text-xl">
                Register New User
             </h1>
            <RegisterForm/>
            </div>
          </div>
        </div>
    );
}

export default page;