import { ReactNode } from 'react';
import { redirect } from "next/navigation";
import { HeaderDashboard } from '@/components/dashboard';
import { Button } from '@/components/UI';
import { ButtonTypes, ButtonVariant } from '@/interfaces';
import { cookies } from 'next/headers';

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const cookieStore = await cookies();

  if (!cookieStore.get('token')) {
    return redirect("/auth/login");
  }

  return (
    <>
      <HeaderDashboard userName={''}/>
      <nav className='bg-white w-full md:w-5/6 m-auto flex my-4 p-4 rounded-lg'>
        <Button text='Inicio' url='/finance' variant={ButtonVariant.LINK} typeButton={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Movimientos' url='/finance/transactions' variant={ButtonVariant.LINK} typeButton={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Categorías' url='/finance/categories' variant={ButtonVariant.LINK} typeButton={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Total del año' url='/finance/year' variant={ButtonVariant.LINK} typeButton={ButtonTypes.LINK} className='mx-4'/>
      </nav>
      {children}
    </>
  );
}