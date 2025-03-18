import { ChangeEvent } from "react";

interface Props {
    name?: string;
    value?: string;
    className?: string;
    error?: boolean;
    children: React.ReactNode
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const classInputInValid = 'border-red-500'

export const Select = ({ name, onChange, className, error, value, children }: Props) => {
  return (
    <select
        className={`${className} ${error && classInputInValid} w-full py-4 px-4 text-lg border bg-white dark:bg-gray-800 rounded-md border-light-200 focus:border-primary dark:focus:border-indigo-800 dark:text-white outline-none`}
        name={name}
        onChange={onChange}
        value={value}
    >
        <option value="" disabled>Seleccione una opción</option>
        { children }
    </select> 
  )
}