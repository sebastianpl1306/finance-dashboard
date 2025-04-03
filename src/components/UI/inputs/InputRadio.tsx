import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  options: {
    text: string;
    value: string;
    id: string;
    checked?: boolean;
  }[];
  className?: string;
  hasError?: boolean;
}

const classInputInValid = 'border-red-500';

export const InputRadio = ({ className, hasError, options, ...props }: Props) => {
  return (
    <>
        {
            options.map((option) => (
                <div className='flex my-2 items-center' key={option.value}>
                    <input
                    className={`${className} ${hasError && classInputInValid} w-5 h-5 py-4 px-4 text-lg border bg-white dark:bg-gray-800 rounded-md border-light-200 focus:border-primary dark:focus:border-indigo-800 dark:text-white outline-none`}
                    type='radio'
                    value={option.value}
                    id={option.id}
                    checked={option.checked}
                    {...props}
                    />
                    <label className='ml-3 text-lg text-black dark:text-white' htmlFor={option.id}>{option.text}</label>
                </div>
            ))
        }
    </>
  )
}