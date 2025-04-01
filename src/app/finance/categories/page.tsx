import { BreadcrumbItem } from "@/interfaces";
import { Breadcrumb } from "@/components/UI";
import { starGetCategories } from "@/actions/categoryActions";
import { ButtonOpenCreateCategoryModal, CategoriesTable, NewCategoryModal, UpdateCategoryModal } from "@/components/dashboard";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
  { name: "Categorías", url: "/finance/categories" },
]

export default async function CategoriesPage() {
  const categories = await starGetCategories();

  return (
    <main className="bg-white w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll">
      <nav className="mb-2">
        <h2 className="text-2xl font-bold">Categorías</h2>
        <Breadcrumb items={itemsBreadCrumb}/>
      </nav>
      <section>
        <div className="flex justify-end mb-4">
          <ButtonOpenCreateCategoryModal/>
        </div>
        <CategoriesTable categories={categories ? categories : []}/>
      </section>
      <NewCategoryModal/>
      <UpdateCategoryModal/>
    </main>
  );
}