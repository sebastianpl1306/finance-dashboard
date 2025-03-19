'use client'
import { useState } from "react";
import { BreadcrumbItem } from "@/interfaces";
import { Breadcrumb, Button, Pagination } from "@/components/UI";
import { CategoriesTable } from "@/components/dashboard";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
  { name: "Categorías", url: "/finance/categories" },
]

export default function CategoriesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="bg-white w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll">
      <nav className="mb-2">
        <h2 className="text-2xl font-bold">Movimientos</h2>
        <Breadcrumb items={itemsBreadCrumb}/>
      </nav>
      <section>
        <div className="flex justify-end mb-4">
          <Button text="+ Crear categoría"/>
        </div>
        <CategoriesTable/>
        <Pagination currentPage={currentPage} totalPages={10} changePage={setCurrentPage}/>
      </section>
    </main>
  );
}