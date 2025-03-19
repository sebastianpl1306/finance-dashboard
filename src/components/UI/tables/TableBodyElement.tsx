import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const TableBodyElement = ({ className, children }: Props) => {
  return (
    <td className={`${className} text-left py-3`}>{children}</td>
  )
}