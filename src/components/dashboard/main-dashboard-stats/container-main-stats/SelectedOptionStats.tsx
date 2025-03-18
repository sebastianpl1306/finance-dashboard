'use client'

interface Props {
    isActive: boolean;
    onClick: (optionSelected: string) => void;
    name: string;
    text: string;
}

export const SelectedOptionStats = ({ isActive, name, text, onClick }: Props) => {
  return (
    <button className={`${isActive ? 'border-primary' : 'border-gray'} border w-full h-10 flex items-center rounded-lg p-4 my-2 cursor-pointer`} onClick={() => onClick(name)}>
        <div className="mr-4">
            <input
                type="checkbox"
                className="peer hidden"
                id={name}
                checked={isActive}
                onChange={() => onClick(name)}
            />
            <label
                htmlFor={name}
                className="block w-6 h-6 border border-gray-400 rounded-full cursor-pointer peer-checked:bg-primary peer-checked:border-transparent transition-all"
            />
        </div>
        <div className="flex justify-between items-center">
            <p className={`${isActive ? 'text-primary' : 'text-black'} text-2xl font-semibold`}>{text}</p>
        </div>
    </button>
  )
}