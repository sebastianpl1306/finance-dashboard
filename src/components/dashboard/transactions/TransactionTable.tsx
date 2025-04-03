'use client'
import { Chip, Table, TableBody, TableBodyElement, TableBodyGroupElements, TableHead, TableHeadElement } from "@/components/UI"
import { Transaction, TypesTransaction } from "@/interfaces"
import { useTransactionStore } from "@/store";

interface Props {
    transactions: Transaction[]
}

export const TransactionTable = ({ transactions }: Props) => {
  const { setCurrentTransaction, toggleUpdateTransactionModal } = useTransactionStore( state => state);
  
  const handleSelectTransaction = (transaction: Transaction) => {
    setCurrentTransaction(transaction);
    toggleUpdateTransactionModal(true);
  }

  return (
    <Table>
        <TableHead>
          <TableHeadElement label='Nombre'/>
          <TableHeadElement label='Fecha'/>
          <TableHeadElement label='Categoría'/>
          <TableHeadElement label='Tipo de movimiento'/>
          <TableHeadElement label='Total'/>
        </TableHead>
        <TableBody>
            {
                transactions.map((transaction) => (
                    <TableBodyGroupElements key={transaction._id} className="cursor-pointer" onClick={() => handleSelectTransaction(transaction)}>
                        <TableBodyElement className="flex flex-col">
                            <p className='text-primary'>{transaction.name}</p>
                            <span className="text-sm text-gray-400">{transaction.description}</span>
                        </TableBodyElement>
                        <TableBodyElement>{new Date(transaction.date).toLocaleDateString()}</TableBodyElement>
                        <TableBodyElement>
                            <Chip background={transaction.category.color}>{transaction.category.name}</Chip>
                        </TableBodyElement>
                        <TableBodyElement>
                            {transaction.type === TypesTransaction.EXPENSE && (<span className="text-red-500 font-semibold">EGRESO</span>)}
                            {transaction.type === TypesTransaction.INCOME && (<span className="text-green-500 font-semibold">INGRESO</span>)}
                        </TableBodyElement>
                        <TableBodyElement>
                            {transaction.type === TypesTransaction.EXPENSE && (<span className="text-red-500 font-semibold">- $ {transaction.value.toLocaleString("es-CO")}</span>)}
                            {transaction.type === TypesTransaction.INCOME && (<span className="text-green-500 font-semibold">+ $ {transaction.value.toLocaleString("es-CO")}</span>)}
                        </TableBodyElement>
                    </TableBodyGroupElements>
                ))
            }
        </TableBody>
    </Table>
  )
}