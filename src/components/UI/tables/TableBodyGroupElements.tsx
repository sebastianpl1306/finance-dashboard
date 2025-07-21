import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TableBodyGroupElements = ({ children, className, onClick }: Props) => {
  return (
    <tr className={`hover:bg-gray-100 hover:dark:bg-background-dark ${className}`} onClick={onClick}>
      { children }
    </tr>
  )
}