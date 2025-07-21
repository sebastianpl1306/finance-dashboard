import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    className?: string;
    color?: string;
    background?: string;
}

export const Chip = ({ children, className, color, background }: Props) => {
  return (
    <span className={`${className} py-0.5 px-2 rounded-4xl text-shadow-lg font-semibold`} style={{ background, color }}>{ children }</span>
  )
}