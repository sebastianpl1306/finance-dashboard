'use client'
import { Table, TableBody, TableBodyElement, TableBodyGroupElements, TableHead, TableHeadElement } from "@/components/UI"
import { Category } from "@/interfaces"
import { useCategoryStore } from "@/store";

interface Props {
    categories: Category[];
}

export const CategoriesTable = ({ categories }: Props) => {
  const { setCurrentCategory, toggleUpdateCategoryModal } = useCategoryStore( state => state);

  const handleSelectCategory = (category: Category) => {
      setCurrentCategory(category);
      toggleUpdateCategoryModal(true);
  }

  return (
    <Table>
        <TableHead>
            <TableHeadElement label='Nombre'/>
            <TableHeadElement label='Color'/>
        </TableHead>
        <TableBody>
            {categories.map((category) => (
                <TableBodyGroupElements key={category._id} onClick={() => handleSelectCategory(category)} className="cursor-pointer">
                    <TableBodyElement className="flex flex-col">
                        <span className='text-primary'>{category.name}</span>
                        <span className="text-sm text-gray-400">{category.description}</span>
                    </TableBodyElement>
                    <TableBodyElement>
                        <span className="block w-10 h-10 rounded-2xl" style={{ background: category.color }}></span>
                    </TableBodyElement>
                </TableBodyGroupElements>
            ))}
        </TableBody>
    </Table>
  )
}