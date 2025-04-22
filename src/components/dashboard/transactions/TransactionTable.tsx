import { Transaction } from "@/interfaces"
import { TransactionItem } from "./TransactionItem";

interface Props {
    transactions: Transaction[]
}

export const TransactionTable = ({ transactions }: Props) => {

  return (
    <section className="my-4 px-2">
        {
            transactions.map((transaction) => (
                <div key={transaction._id}>
                    <TransactionItem transaction={transaction}/>
                    <hr className="border-gray"/>
                </div>
            ))
        }
    </section>
  )
}