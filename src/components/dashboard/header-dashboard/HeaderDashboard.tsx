import Image from "next/image"

interface Props {
  userName: string;
}

export const HeaderDashboard = ({ userName }: Props) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md h-[10vh]">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        <div className="flex flex-col items-center">
            <Image
                width={50}
                height={50}
                className="border rounded-full border-primary cursor-pointer"
                src="/images/user_default.svg"
                alt="Imagen del usuario"/>
            <span className="text-xs text-center text-primary">{userName}</span>
        </div>
    </header>
  )
}