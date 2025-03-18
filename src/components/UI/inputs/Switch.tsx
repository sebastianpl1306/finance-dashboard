interface Props {
  checked: boolean;
  handleCheck: (checked: boolean) => void;
}

export const Switch = ({ checked, handleCheck }: Props) => {
  return (
    <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
        <input
            type="checkbox"
            id="toggle"
            checked={checked}
            onChange={() => handleCheck(!checked)}
            className={`${checked ? 'bg-white' : 'bg-light-red-300'} transition-all duration-200 absolute block w-6 h-6 rounded-full appearance-none cursor-pointer checked:right-0 focus:outline-none`}/>
        <label htmlFor="toggle" className={`${checked ? 'bg-light-red-300' : 'bg-light-300'} transition-all duration-200 block overflow-hidden h-6 rounded-full cursor-pointer`}></label>
    </div>
  )
}