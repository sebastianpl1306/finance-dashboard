import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

export const TableHead = ({ children }: Props) => {
  return (
    <thead className='border-b border-gray'>
        <tr>
            { children }
        </tr>
    </thead>
  )
}