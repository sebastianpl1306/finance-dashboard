import { Card } from '@/components/UI'
import { CategoriesValue } from '@/interfaces';

interface Props {
  categories: CategoriesValue[];
}

export const CategoriesContainerDashboard = ({ categories }: Props) => {
  return (
    <section className="bg-white w-full my-10 rounded-lg p-2">
        <article className="px-4 py-2">
        <h3 className="font-bold font-poppins text-lg mb-2">Categorías con mayor movimiento</h3>
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
