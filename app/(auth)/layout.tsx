"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Auth() {
  const pathName=usePathname()
  const routes=[
   {
    name:"Login",
    href:'/login'
   },
   {
    name:"register",
    href:'/register'
   },
   {
    name:"forgotPassord",
    href:'/forgotpassword'
   }
   
  ]
  return (
    <>
   {
    routes.map((e:any)=>{

      const isActive=pathName.startsWith(e.href)
      return(
        <Link href={e.href} key={e.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{e.name}</Link>
      )
    })
   }
   </>
  );
}