import { DateElement } from "@/interfaces"
import { SelectMonthButton } from "./SelectMonthButton"

interface Props {
    dates: DateElement[]
    activeMonth?: number;
    activeYear?: number;
}

export const MonthTransactionsFilters = ({ dates, activeMonth, activeYear }: Props) => {
  return (
    <div className="flex gap-2 w-full py-4 overflow-x-auto">
        {
            dates.map((date) => (
                <SelectMonthButton
                    key={date._id.year + date._id.month}
                    month={date._id.month}
                    year={date._id.year}
                    isActive={(activeMonth === date._id.month && activeYear === date._id.year) || (date._id.month === dates[0]._id.month && !activeMonth)}/>
            ))
        }
    </div>
  )
}