import AdminMenu from "@/components/adminComponents/AdminMenu";

const page = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className=" flex justify-center items-center md:p-5 h-full">
            <div className="h-full w-full min-w-[1200px] p-2 md:p-5 bg-[#E8E8E8] rounded-3xl shadow-xl">
               <AdminMenu/>
               {children}
            </div>
        </div>
    );
}

export default page;