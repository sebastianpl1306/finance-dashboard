import { starGetTransactions } from "@/actions/transactionsActions";
import { BreadcrumbItem } from "@/interfaces";
import { CategoriesContainerDashboard, LatestTransactionsContainer, MainDashboardStats } from "@/components/dashboard";
import { getCategoryStats, getGeneralStats } from "@/actions/statsActions";


const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
]

export default async function HomeDashboardPage() {
  const transactions = await starGetTransactions(1);
  const generalStats = await getGeneralStats();
  const categoriesStats = await getCategoryStats();

  return (
    <main className="grid grid-cols-5 grid-rows-5 gap-4 w-full md:w-5/6 m-auto min-h-[80vh]">
        <MainDashboardStats
          breadCrumbItems={itemsBreadCrumb}
          summaryLastMonth={generalStats.summaryLastMonth}
          summaryLastYear={generalStats.summaryLastYear}/>
        <LatestTransactionsContainer transactions={transactions.transactions ? transactions.transactions : []}/>
        <CategoriesContainerDashboard categories={categoriesStats ? categoriesStats : []}/>
    </main>
  );
}