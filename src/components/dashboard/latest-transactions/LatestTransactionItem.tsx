import { Chip } from "@/components/UI";
import { Transaction, TypesTransaction } from "@/interfaces";

interface Props {
  transaction: Transaction;
}

export const LatestTransactionItem = ({ transaction }: Props) => {
  return (
    <article className='my-2'>
        <div className='flex justify-between'>
            <p>{transaction.name}</p>
            {transaction.type === TypesTransaction.EXPENSE && (<p className="text-red-500 font-bold">- ${transaction.value.toLocaleString("es-CO")}</p>)}
            {transaction.type === TypesTransaction.INCOME && (<p className="text-green-500 font-bold">+ ${transaction.value.toLocaleString("es-CO")}</p>)}
        </div>
        <div className='flex justify-between'>
            <Chip background={transaction.category.color} className="text-sm">{transaction.category.name}</Chip>
            <p className='text-sm'>{new Date(transaction.date).toLocaleDateString()}</p>
        </div>
    </article>
  )
}