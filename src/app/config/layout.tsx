import { ReactNode } from 'react';
import { redirect } from "next/navigation";
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
      <div className='h-[10vh] w-full'></div>
      {children}
    </>
  );
}