import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function LayoutFinance({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}