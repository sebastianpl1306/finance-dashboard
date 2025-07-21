import Image from "next/image"
import { Button } from "@/components/UI"
import { ButtonTypes } from "@/interfaces"

export const HeaderHome = () => {
  return (
    <header className="bg-white dark:bg-mode-dark dark:text-white-dark h-[10vh] w-full shadow-md fixed top-0 left-0 flex justify-between items-center p-4">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        <div className="flex gap-2">
            <Button text="Iniciar Sesión" typeButton={ButtonTypes.LINK} url="/auth/login"/>
        </div>
    </header>
  )
}