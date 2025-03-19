import { Table, TableBody, TableBodyElement, TableBodyGroupElements, TableHead, TableHeadElement } from "@/components/UI"
import Link from "next/link"

export const TransactionTable = () => {
  return (
    <Table>
        <TableHead>
          <TableHeadElement label='Nombre'/>
          <TableHeadElement label='Fecha'/>
          <TableHeadElement label='Categoría'/>
          <TableHeadElement label='Total'/>
        </TableHead>
        <TableBody>
            <TableBodyGroupElements>
                <TableBodyElement className="flex flex-col">
                    <Link href={`/finance/transactions/idMovimiento`} className='text-primary'>Patineta scooter</Link>
                    <span className="text-sm text-gray-400">Patineta scooter de regalo de mi hermana</span>
                </TableBodyElement>
                <TableBodyElement>3/02/2025</TableBodyElement>
                <TableBodyElement>Entretenimiento</TableBodyElement>
                <TableBodyElement>
                    <span className="text-red-500">- $87.550</span>
                </TableBodyElement>
            </TableBodyGroupElements>
            <TableBodyGroupElements>
                <TableBodyElement>
                    <Link href={`/finance/transactions/idMovimiento`} className='text-primary'>Gym</Link>
                </TableBodyElement>
                <TableBodyElement>4/02/2025</TableBodyElement>
                <TableBodyElement>Entretenimiento</TableBodyElement>
                <TableBodyElement>
                    <span className="text-red-500">- $90.000</span>
                </TableBodyElement>
            </TableBodyGroupElements>
        </TableBody>
    </Table>
  )
}