import { BreadcrumbItem } from "@/interfaces";
import { Breadcrumb } from "@/components/UI";
import { starGetCategories } from "@/actions/categoryActions";
import { ButtonOpenCreateCategoryModal, CategoriesTable, NewCategoryModal, UpdateCategoryModal } from "@/components/dashboard";
import { IoAlbumsOutline } from "react-icons/io5";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
  { name: "Categorías", url: "/finance/categories" },
]

export default async function CategoriesPage() {
  const categories = await starGetCategories();

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll">
      <Breadcrumb items={itemsBreadCrumb} title="Categorías"/>
      <section>
        <div className="flex justify-end mb-4">
          <ButtonOpenCreateCategoryModal/>
        </div>
        {categories.length === 0 && (
          <section className="h-full flex items-center justify-center flex-col text-center text-gray-500">
            <IoAlbumsOutline size={48} />
            <p>No hay categorías registradas.</p>
          </section>
        )}
        {categories.length > 0 && (<CategoriesTable categories={categories ? categories : []}/>)}
      </section>
      <NewCategoryModal/>
      <UpdateCategoryModal/>
    </main>
  );
}