import { HeaderDashboard } from '@/components/dashboard';
import { Button } from '@/components/UI';
import { ButtonVariant } from '@/interfaces';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <HeaderDashboard/>
      <nav className='bg-white w-full md:w-5/6 m-auto flex my-4 p-4 rounded-lg'>
        <Button text='Inicio' variant={ButtonVariant.LINK} className='mx-4'/>
        <Button text='Movimientos' variant={ButtonVariant.LINK} className='mx-4'/>
        <Button text='Categorías' variant={ButtonVariant.LINK} className='mx-4'/>
        <Button text='Gastos del año' variant={ButtonVariant.LINK} className='mx-4'/>
        <Button text='Ingresos del año' variant={ButtonVariant.LINK} className='mx-4'/>
        <Button text='Total del año' variant={ButtonVariant.LINK} className='mx-4'/>
      </nav>
      {children}
    </>
  );
}