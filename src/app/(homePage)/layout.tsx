import { FooterHome, HeaderHome } from '@/components/homePage';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function LayoutFinance({ children }: Props) {
  return (
    <>
      <HeaderHome/>
      <div className="h-[10vh] w-full"></div>
      {children}
      <FooterHome/>
    </>
  );
}