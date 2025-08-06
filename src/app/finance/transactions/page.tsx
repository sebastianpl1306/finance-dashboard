import { getTransactionsDates, starGetTransactions } from "@/actions/transactionsActions";
import { ButtonOpenCreateTransactionModal, MonthTransactionsFilters, NewTransactionModal, TransactionTable, UpdateTransactionModal } from "@/components/dashboard";
import { Breadcrumb, Pagination } from "@/components/UI";
import { BreadcrumbItem } from "@/interfaces";
import { IoDocumentOutline } from "react-icons/io5";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
  { name: "Movimientos", url: "/finance/transactions" },
]

interface Props {
  searchParams: { 
    page: string,
    month: string,
    year: string
  }
}

export default async function TransactionPage({ searchParams }: Props) {
  const { page, month, year } = await searchParams;
  const transactions = await starGetTransactions(page ? Number(page) : 1, month ? Number(month) : new Date().getMonth() + 1, year ? Number(year) : new Date().getFullYear());
  const datesOfTransactions = await getTransactionsDates();

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll">
      <Breadcrumb items={itemsBreadCrumb} title="Movimientos"/>
      <section>
        <div className="flex justify-end mb-4">
          <ButtonOpenCreateTransactionModal/>
        </div>
        <MonthTransactionsFilters dates={datesOfTransactions.dates ? datesOfTransactions.dates : []} activeMonth={Number(month)} activeYear={Number(year)}/>
        {transactions.transactions.length === 0 && (
          <section className="h-full flex items-center justify-center flex-col text-center text-gray-500">
            <IoDocumentOutline size={48} />
            <p>No hay movimientos recientes.</p>
          </section>
        )}
        { transactions.transactions.length > 0 && (<TransactionTable transactions={transactions?.transactions}/>)}
        {transactions.transactions.length > 0 && (<Pagination currentPage={transactions.currentPage} totalPages={transactions.pages}/>)}
      </section>
      <NewTransactionModal/>
      <UpdateTransactionModal/>
    </main>
  );
}