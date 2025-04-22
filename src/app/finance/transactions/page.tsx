import { getTransactionsDates, starGetTransactions } from "@/actions/transactionsActions";
import { ButtonOpenCreateTransactionModal, MonthTransactionsFilters, NewTransactionModal, TransactionTable, UpdateTransactionModal } from "@/components/dashboard";
import { Breadcrumb, Pagination } from "@/components/UI";
import { BreadcrumbItem } from "@/interfaces";

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
    <main className="bg-white w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll">
      <nav className="mb-2">
        
        <h2 className="text-2xl font-bold">Movimientos</h2>
        <Breadcrumb items={itemsBreadCrumb}/>
      </nav>
      <section>
        <div className="flex justify-end mb-4">
          <ButtonOpenCreateTransactionModal/>
        </div>
        <MonthTransactionsFilters dates={datesOfTransactions.dates ? datesOfTransactions.dates : []} activeMonth={Number(month)} activeYear={Number(year)}/>
        <TransactionTable transactions={transactions?.transactions}/>
        <Pagination currentPage={transactions.currentPage} totalPages={transactions.pages}/>
      </section>
      <NewTransactionModal/>
      <UpdateTransactionModal/>
    </main>
  );
}