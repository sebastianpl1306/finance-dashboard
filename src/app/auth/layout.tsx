import { ReactNode } from 'react';

import './auth.css';

interface Props {
  children: ReactNode;
}

export default function LayoutAuth({ children }: Props) {
  return (
    <div className='flex h-screen w-full'>
      {children}
      <aside className='justify-end content-aside hidden md:flex w-2/3 flex-col'>
      </aside>
    </div>
  );
}