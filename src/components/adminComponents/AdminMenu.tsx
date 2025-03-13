
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDatabase } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";

const AdminMenu = () => {
    const pathName= usePathname()
    const menuItems=[
        {
            name:"Data",
            path: "/admin",
            icon: <FaDatabase />
        },
        {
            name:"Analytics",
            path: "/admin/analytics",
            icon: <IoAnalyticsOutline/>
        },
    ]
    return (
        <div className="flex justify-center">
            <div className="text-sm flex justify-center align-items bg-[#FFB232] rounded-lg">
                {
                   menuItems.map((item, index)=>
                        <Link style={{background:`${pathName===item.path?"white":""}`,
                                        color:`${pathName===item.path?"black":""}`}}
                            href={item.path} key={index} className="flex items-center gap-2 flex-1 py-2 p-3 rounded-lg text-white">
                            <div>
                                {item.icon}
                            </div>
                            <p>
                                {item.name}
                            </p>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default AdminMenu;