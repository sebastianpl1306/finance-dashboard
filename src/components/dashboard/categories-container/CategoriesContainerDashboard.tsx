import { Card } from '@/components/UI'

export const CategoriesContainerDashboard = () => {
  return (
    <section className="bg-white col-span-5 row-start-6 rounded-lg p-2">
        <article className="px-4 py-2">
        <h3 className="font-bold font-poppins text-lg mb-2">Categorías con mayor movimiento</h3>
        <div className="grid grid-cols-6 gap-4">
            <Card className="py-4">
            <p className="text-xl font-semibold text-center">Hogar</p>
            <p className="text-4xl font-extrabold text-center">$ 990.024</p>
            </Card>
            <Card className="py-4">
            <p className="text-xl font-semibold text-center">Entretenimiento</p>
            <p className="text-4xl font-extrabold text-center">$ 503.100</p>
            </Card>
            <Card className="py-4">
            <p className="text-xl font-semibold text-center">Alimentación</p>
            <p className="text-4xl font-extrabold text-center">$ 415.550</p>
            </Card>
            <Card className="py-4">
            <p className="text-xl font-semibold text-center">Salud y belleza</p>
            <p className="text-4xl font-extrabold text-center">$ 191.300</p>
            </Card>
            <Card className="py-4">
            <p className="text-xl font-semibold text-center">Estudio</p>
            <p className="text-4xl font-extrabold text-center">$ 265.500</p>
            </Card>
            <Card className="py-4">
            <p className="text-xl font-semibold text-center">Moda</p>
            <p className="text-4xl font-extrabold text-center">$ 12.500</p>
            </Card>
        </div>
        </article>
    </section>
  )
}
