import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: Props) => {
  return (
    <div className={`${className} rounded-3xl border border-gray w-full`}>
        {children}
    </div>
  )
}