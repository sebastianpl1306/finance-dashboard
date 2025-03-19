import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

export const TableBodyGroupElements = ({ children }: Props) => {
  return (
    <tr>
        { children }
    </tr>
  )
}