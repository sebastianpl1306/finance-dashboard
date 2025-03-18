'use client'
import { ReactNode } from "react";
import Link from "next/link";
import { ButtonTypes, ButtonVariant } from "@/interfaces";

interface Props {
  text: string;
  className?: string;
  url?: string;
  type?: ButtonTypes;
  variant?: ButtonVariant;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
}

export type StateInputs = {
  [key: string]: string;
}

export const Button = ({ text, className, type = ButtonTypes.BUTTON, variant = ButtonVariant.PRIMARY, url, onClick, icon, disabled }: Props) => {
  const variantClass: StateInputs = {
    primary: `mw-20 py-2 px-8 bg-primary dark:bg-primary-dark rounded-lg text-white font-medium hover:bg-primary-100`,
    secondary: `bg-secondary hover:bg-secondary-100 dark:bg-secondary-dark dark:hover:bg-secondary-dark-100 mw-20 py-3 px-8 rounded text-dark font-medium`,
    link: `text-primary hover:underline hover:decoration-solid dark:text-white`,
  }

  if(type === ButtonTypes.BUTTON || type === ButtonTypes.SUBMIT) {
    return(
        <button
          className={`${className} ${variantClass[variant]} flex items-center justify-center cursor-pointer font-poppins`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {icon && (<span className="mr-2">{icon}</span>)}
          {text}
        </button>
    )
  }

  return (
    <Link
      className={`${className} ${variantClass[variant]} flex items-center justify-center cursor-pointer font-poppins`}
      href={url ?? '/'}
      onClick={onClick}
    >
      {icon && (<span className="mr-2">{icon}</span>)}
      {text}
    </Link>
  )
}