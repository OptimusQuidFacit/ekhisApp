"use client"
import { sessionType } from "@/app/layout";
// import { userType } from "@/app/lib/models/user";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

const Menu = ({session}:{session:sessionType | null}) => {
    const menuItems=[
        {
            name:'Add Patient',
            path:"/",
            icon: <FaPlus/>

            
        },
    ]
   session?.user.isAdmin&&menuItems.push(    {
    name:'Admin',
    path:"/admin",
    icon: <RiAdminLine/>
    
})
    const path= usePathname();
    const pathName=path.split('/')[1]
    // console.log(pathName);
    return (
        <div className="text-sm p-2 md:p-5 flex gap-4">
            {
                menuItems.map(item=>
                <Link key={item.name}
                    href={item.path}>
                    <div style={{background:`${pathName===item.path.split('/')[1]?"white":""}`,
                    color:`${pathName===item.path.split('/')[1]?"black":""}`}}
                      className="flex gap-2 items-center hover:border-2 hover:text-[#FFB232] hover:bg-white hover:border-[#FFB232] bg-[#FFB232] text-white p-3 rounded-2xl">
                        {item.icon}
                            {item.name}
                    </div>
                </Link>
                )
            }
        </div>
    );
}

export default Menu;