import { ReactNode } from 'react';
import { redirect } from "next/navigation";
import { HeaderDashboard } from '@/components/dashboard';
import { Button } from '@/components/UI';
import { ButtonTypes, ButtonVariant } from '@/interfaces';
import { cookies } from 'next/headers';
import { UserOptionsMenu } from '@/components/layout';
import { getCurrentUser } from '@/actions/authActions';

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const cookieStore = await cookies();
  const user = await getCurrentUser();

  if (!cookieStore.get('token') || !user) {
    return redirect("/auth/login");
  }

  // TODO: Implement subscription check
  // if(user.isSubscribed === false) {
  //   return redirect("/config/payment");
  // }

  return (
    <>
      <HeaderDashboard/>
      <div className='h-[10vh] w-full'></div>
      <UserOptionsMenu/>
      <nav className='bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto flex my-4 p-4 rounded-lg'>
        <Button text='Inicio' url='/finance' variant={ButtonVariant.LINK} typeButton={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Movimientos' url='/finance/transactions' variant={ButtonVariant.LINK} typeButton={ButtonTypes.LINK} className='mx-4'/>
        <Button text='Categorías' url='/finance/categories' variant={ButtonVariant.LINK} typeButton={ButtonTypes.LINK} className='mx-4'/>
      </nav>
      {children}
    </>
  );
}