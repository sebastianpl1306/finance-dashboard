import Link from "next/link"
import { Table, TableBody, TableBodyElement, TableBodyGroupElements, TableHead, TableHeadElement } from "@/components/UI"

export const CategoriesTable = () => {
  return (
    <Table>
        <TableHead>
            <TableHeadElement label='Nombre'/>
            <TableHeadElement label='Color'/>
        </TableHead>
        <TableBody>
            <TableBodyGroupElements>
                <TableBodyElement className="flex flex-col">
                    <Link href={`/finance/transactions/idMovimiento`} className='text-primary'>Estudio</Link>
                    <span className="text-sm text-gray-400">Compras relacionadas a cursos, clases o universidades</span>
                </TableBodyElement>
                <TableBodyElement><span className="block w-10 h-10 bg-amber-400 rounded-2xl"></span></TableBodyElement>
            </TableBodyGroupElements>
        </TableBody>
    </Table>
  )
}