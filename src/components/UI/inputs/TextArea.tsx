import { ChangeEventHandler } from 'react';
import { TypeVariant } from '../../../interfaces';

interface Props {
  className?: string;
  value?: string;
  type?: TypeVariant;
  name?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const classInputInValid = 'border-red-500'
export const TextArea = ({ className, onChange, value = '', placeholder, name, error }: Props) => {
    return (
        <textarea
            className={`${className} ${error && classInputInValid} w-full py-4 px-4 min-h-52 text-lg border bg-white dark:bg-gray-800 rounded-md border-light-200 focus:border-primary dark:focus:border-indigo-800 dark:text-white outline-none`}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
        />
    )
}