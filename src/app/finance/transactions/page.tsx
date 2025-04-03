import { starGetTransactions } from "@/actions/transactionsActions";
import { ButtonOpenCreateTransactionModal, NewTransactionModal, TransactionTable, UpdateTransactionModal } from "@/components/dashboard";
import { Breadcrumb, Pagination } from "@/components/UI";
import { BreadcrumbItem } from "@/interfaces";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
  { name: "Movimientos", url: "/finance/transactions" },
]

interface Props {
  params: { 
    page: string,
  }
}

export default async function TransactionPage({ params }: Props) {
  const transactions = await starGetTransactions(params.page ? Number(params.page) : 1);

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
        <TransactionTable transactions={transactions?.transactions}/>
        <Pagination currentPage={transactions.currentPage} totalPages={transactions.pages}/>
      </section>
      <NewTransactionModal/>
      <UpdateTransactionModal/>
    </main>
  );
}