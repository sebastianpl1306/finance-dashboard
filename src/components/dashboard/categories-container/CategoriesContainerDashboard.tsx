import { Card } from '@/components/UI'
import { CategoriesValue } from '@/interfaces';
import { IoAlbumsOutline } from 'react-icons/io5';

interface Props {
  categories: CategoriesValue[];
}

export const CategoriesContainerDashboard = ({ categories }: Props) => {
  return (
    <section className="bg-white dark:bg-mode-dark dark:text-white-dark w-full my-10 rounded-lg p-2">
        <article className="px-4 py-2">
        <h3 className="font-bold font-poppins text-lg mb-2">Categorías con mayor movimiento</h3>
        {
          categories.length === 0 && (
            <section className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <IoAlbumsOutline size={48} />
              <p>No hay categorías con movimientos recientes.</p>
            </section>
          )
        }
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {
            categories.map( (category, index) => (
              <Card key={index} className="py-4">
                <p className="text-xl font-semibold text-center">{category.category.name}</p>
                <p className="text-4xl font-extrabold text-center">$ {category.total.toLocaleString("es-CO")}</p>
              </Card>
            ))
          }
        </div>
        </article>
    </section>
  )
}
