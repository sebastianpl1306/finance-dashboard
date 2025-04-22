'use client'
import { Button } from "@/components/UI";
import { ButtonVariant } from "@/interfaces";
import { getMonthName } from "@/helpers/transformDates";
import { usePathname, useRouter } from "next/navigation";
import { transformParamsTransactions } from "@/helpers";

interface Props {
    month: number;
    year: number;
    isActive: boolean;
}

export const SelectMonthButton = ({ month, year, isActive }: Props) => {
  const pathname = usePathname()
  const router = useRouter();

  const handleChangeMonth = (month: number, year: number) => {
    router.push(`${pathname}${transformParamsTransactions(null, month.toString(), year.toString())}`);
    router.refresh();
  }

  return (
    <Button
        text={`${getMonthName(month)} ${year}`}
        variant={isActive ? ButtonVariant.SECONDARY : ButtonVariant.LINK }
        className="mw-20 py-3 px-8 rounded"
        onClick={() => handleChangeMonth(month, year)}
    />
  )
}