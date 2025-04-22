'use client'
import { Chip } from '@/components/UI'
import { Transaction, TypesTransaction } from '@/interfaces';
import { useTransactionStore } from '@/store';

interface Props {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: Props) => {
  const { setCurrentTransaction, toggleUpdateTransactionModal } = useTransactionStore( state => state);

  const handleSelectTransaction = (transaction: Transaction) => {
    setCurrentTransaction(transaction);
    toggleUpdateTransactionModal(true);
  }

  return (
    <article className='my-2 cursor-pointer' onClick={() => handleSelectTransaction(transaction)}>
        <div className='flex justify-between'>
            <p className='font-semibold text-lg'>{transaction.name}</p>
            {transaction.type === TypesTransaction.EXPENSE && (<p className="text-red-500 font-bold">-$ {transaction.value.toLocaleString("es-CO")}</p>)}
            {transaction.type === TypesTransaction.INCOME && (<p className="text-green-500 font-bold">+$ {transaction.value.toLocaleString("es-CO")}</p>)}
        </div>
        <div className='flex justify-between'>
            <Chip background={transaction.category.color} className="text-sm">{transaction.category.name}</Chip>
            <p className='text-sm'>{new Date(transaction.date).toLocaleDateString()}</p>
        </div>
    </article>
  )
}