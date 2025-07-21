import Image from "next/image"
import { ButtonProfile } from "./ButtonProfile";
import { cookies } from "next/headers";

export const HeaderDashboard = async() => {
  const cookieStore = await cookies();

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white dark:bg-mode-dark shadow-md h-[10vh]">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        <ButtonProfile userName={cookieStore.get('userName')?.value || ''}/>
    </header>
  )
}