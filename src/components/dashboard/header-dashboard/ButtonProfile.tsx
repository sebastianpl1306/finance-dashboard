'use client'
import Image from 'next/image'
import { useUi } from "@/hooks";

interface Props {
    userName?: string;
}

export const ButtonProfile = ({ userName }: Props) => {
  const { handleToggleUserOptionsMenu } = useUi();

  return (
    <div className="flex flex-col items-center" onClick={handleToggleUserOptionsMenu}>
        <Image
            width={50}
            height={50}
            className="border rounded-full border-primary cursor-pointer"
            src="/images/user_default.svg"
            alt="Imagen del usuario"/>
        <span className="text-xs text-center text-primary">{userName}</span>
    </div>
  )
}