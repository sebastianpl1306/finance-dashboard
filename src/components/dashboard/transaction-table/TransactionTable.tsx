import Link from "next/link"
import { Table, TableBody, TableBodyElement, TableBodyGroupElements, TableHead, TableHeadElement } from "@/components/UI"
import { Transaction, TypesTransaction } from "@/interfaces"

interface Props {
    transactions: Transaction[]
}

export const TransactionTable = ({ transactions }: Props) => {
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
                    <TableBodyGroupElements key={transaction._id}>
                        <TableBodyElement className="flex flex-col">
                            <Link href={`/finance/transactions/idMovimiento`} className='text-primary'>{transaction.name}</Link>
                            <span className="text-sm text-gray-400">{transaction.description}</span>
                        </TableBodyElement>
                        <TableBodyElement>{new Date(transaction.date).toLocaleDateString()}</TableBodyElement>
                        <TableBodyElement>{transaction.category.name}</TableBodyElement>
                        <TableBodyElement>
                            {transaction.type === TypesTransaction.EXPENSE && (<span className="text-red-500 font-semibold">EGRESO</span>)}
                            {transaction.type === TypesTransaction.INCOME && (<span className="text-green-500 font-semibold">INGRESO</span>)}
                        </TableBodyElement>
                        <TableBodyElement>
                            {transaction.type === TypesTransaction.EXPENSE && (<span className="text-red-500 font-semibold">- ${transaction.value}</span>)}
                            {transaction.type === TypesTransaction.INCOME && (<span className="text-green-500 font-semibold">+ ${transaction.value}</span>)}
                        </TableBodyElement>
                    </TableBodyGroupElements>
                ))
            }
        </TableBody>
    </Table>
  )
}