'use client'

interface Props {
  name?: string;
  className?: string;
  error?: boolean;
  id?: string;
  children: React.ReactNode
}

const classInputInValid = 'border-red-500'

export const Select = ({ name, className, error, id, children }: Props) => {
  return (
    <select
        className={`${className} ${error && classInputInValid} w-full py-4 px-4 text-lg border bg-white dark:bg-gray-800 rounded-md border-light-200 focus:border-primary dark:focus:border-indigo-800 dark:text-white outline-none`}
        name={name}
        id={id}
    >
        <option value="" disabled>Seleccione una opción</option>
        { children }
    </select> 
  )
}