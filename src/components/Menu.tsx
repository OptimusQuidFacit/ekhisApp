"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

const Menu = () => {
    const menuItems=[
        {
            name:'Add Patient',
            path:"/",
            icon: <FaPlus/>

            
        },
        {
            name:'Admin',
            path:"/admin",
            icon: <RiAdminLine/>
            
        },
    ]
    const path= usePathname();
    const pathName=path.split('/')[1]
    // console.log(pathName);
    return (
        <div className="p-2 md:p-5 flex gap-4">
            {
                menuItems.map(item=>
                    <div style={{background:`${pathName===item.path.split('/')[1]?"white":""}`,
                    color:`${pathName===item.path.split('/')[1]?"black":""}`}}
                     key={item.name} className="flex gap-2 items-center hover:border-2 hover:text-[#FFB232] hover:bg-white hover:border-[#FFB232] bg-[#FFB232] text-white text-lg p-3 rounded-2xl">
                        {item.icon}
                        <Link 
                        href={item.path}>
                            {item.name}
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Menu;