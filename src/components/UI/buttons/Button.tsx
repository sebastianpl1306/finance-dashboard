'use client'
import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ButtonTypes, ButtonVariant } from "@/interfaces";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  url?: string;
  typeButton?: ButtonTypes;
  variant?: ButtonVariant;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
}

export type StateInputs = {
  [key: string]: string;
}

export const Button = ({ text, className, typeButton = ButtonTypes.BUTTON, variant = ButtonVariant.PRIMARY, url, onClick, icon, disabled, ...props }: Props) => {
  const variantClass: StateInputs = {
    primary: `mw-20 py-2 px-8 bg-primary dark:bg-primary-dark hover:dark:bg-primary-dark-100 rounded-lg text-white font-medium hover:bg-primary-100`,
    secondary: `bg-secondary text-white hover:bg-secondary-100 dark:bg-secondary-dark dark:hover:bg-secondary-dark-100 mw-20 py-3 px-8 rounded text-dark font-medium`,
    link: `text-primary hover:underline hover:decoration-solid dark:text-white-dark`,
  }

  if(typeButton === ButtonTypes.BUTTON || typeButton === ButtonTypes.SUBMIT) {
    return(
        <button
          className={`${className} ${variantClass[variant]} flex items-center justify-center cursor-pointer font-poppins`}
          type={typeButton}
          onClick={onClick}
          disabled={disabled}
          {...props}
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