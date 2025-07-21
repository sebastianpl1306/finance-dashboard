'use client'
import Image from "next/image"
import { IoCloseOutline, IoCloudyNightOutline, IoSettingsOutline } from "react-icons/io5"
import { Button, ChangeTheme } from "../UI"
import { useUi } from "@/hooks"
import { signOutAction } from "@/actions/authActions"
import Link from "next/link"

export const UserOptionsMenu = () => {
  const { isOpenUserOptionsMenu, handleToggleUserOptionsMenu } = useUi();

  const handleLogout = () => {
    handleToggleUserOptionsMenu();
    signOutAction();
  }

  return (
    <>
    <div className={`${isOpenUserOptionsMenu ? 'block' : 'hidden'} h-screen w-full top-0 right-0 fixed`} onClick={handleToggleUserOptionsMenu}></div>
    <div className={`${isOpenUserOptionsMenu ? 'fixed' : 'hidden'} bg-white dark:bg-mode-dark dark:text-white-dark right-0 top-0 h-screen w-full md:w-80 md:top-24 md:h-auto md:rounded p-4 shadow`}>
        <button className="absolute right-2 cursor-pointer" onClick={handleToggleUserOptionsMenu}><IoCloseOutline size={30}/></button>
        <div className="flex px-4">
            <Image
                width={80}
                height={80}
                className="border rounded-full border-primary cursor-pointer"
                src="/images/user_default.svg"
                alt="Imagen del usuario"/>
            <div className="flex flex-col justify-center ml-4">
                <p className="font-bold text-xl"></p>
            </div>  
        </div>
        <hr className="my-2 border-gray-500"/>
        <div className="flex justify-between items-center">
            <p className="flex items-center"><IoCloudyNightOutline className="mr-2"/>Cambiar tema</p>
            <ChangeTheme/>
        </div>
        <hr className="my-2 border-gray-500"/>
        <div className="">
          <Link href={'/config/account'} className="flex items-center" onClick={handleToggleUserOptionsMenu}><IoSettingsOutline className="mr-2"/>Configuración</Link>
        </div>
        <hr className="my-2 border-gray-500"/>
        <Button text="Cerrar sesión" className="w-full" onClick={handleLogout}/>
    </div>
    </>
  )
}