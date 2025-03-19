'use client'
import { TransactionTable } from "@/components/dashboard";
import { Breadcrumb, Pagination } from "@/components/UI";
import { BreadcrumbItem } from "@/interfaces";
import { useState } from "react";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
  { name: "Movimientos", url: "/finance/transactions" },
]

export default function TransactionPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="bg-white w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll">
      <nav className="mb-2">
        <h2 className="text-2xl font-bold">Movimientos</h2>
        <Breadcrumb items={itemsBreadCrumb}/>
      </nav>
      <section>
        <TransactionTable/>
        <Pagination currentPage={currentPage} totalPages={10} changePage={setCurrentPage}/>
      </section>
    </main>
  );
}