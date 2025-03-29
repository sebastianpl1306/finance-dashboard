'use client'
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  className?: string;
  hasError?: boolean;
}

const classInputInValid = 'border-red-500'

export const InputText = ({ className, hasError, ...props }: Props) => {

  return (
    <input
      className={`${className} ${hasError && classInputInValid} w-full py-4 px-4 text-lg border bg-white dark:bg-gray-800 rounded-md border-light-200 focus:border-primary dark:focus:border-indigo-800 dark:text-white outline-none`}
      {...props}
    />
  )
}