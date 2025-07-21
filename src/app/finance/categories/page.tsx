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
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll">
      <Breadcrumb items={itemsBreadCrumb} title="Categorías"/>
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