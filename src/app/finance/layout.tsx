import { HeaderDashboard } from '@/components/dashboard';
import { Button } from '@/components/UI';
import { ButtonTypes, ButtonVariant } from '@/interfaces';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <HeaderDashboard/>
      <nav className='bg-white w-full md:w-5/6 m-auto flex my-4 p-4 rounded-lg'>
        <Button text='Inicio' url='/finance' variant={ButtonVariant.LINK} type={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Movimientos' url='/finance/transactions' variant={ButtonVariant.LINK} type={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Categorías' url='/finance/categories' variant={ButtonVariant.LINK} type={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Total del año' url='/finance/year' variant={ButtonVariant.LINK} type={ButtonTypes.LINK} className='mx-4'/>
      </nav>
      {children}
    </>
  );
}