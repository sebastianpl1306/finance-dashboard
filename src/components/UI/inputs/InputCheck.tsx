import { ChangeEvent } from 'react';

interface Props {
  className?: string;
  value?: boolean;
  text: string;
  name?: string;
  onChange?: (newValue: string) => void;
}

export const InputCheck = ({ className, onChange, value = false, text, name }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(onChange) onChange(e.target.value);
  }

  return (
    <div className='flex my-2'>
        <input
            type="checkbox"
            className={`${className} w-6 h-6`}
            name={name}
            id={name}
            onChange={handleChange}
            checked={value}
        />
        <label className='ml-3 text-lg text-black dark:text-white-dark' htmlFor={name}>{text}</label>
    </div>
  )
}