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
    <main className="w-full md:w-5/6 m-auto">
      <div className="grid grid-cols-5 grid-rows-4 gap-4 h-auto xl:h-[80vh]">
        <MainDashboardStats
          breadCrumbItems={itemsBreadCrumb}
          summaryLastMonth={generalStats.summaryLastMonth}
          summaryLastYear={generalStats.summaryLastYear}/>
        <LatestTransactionsContainer transactions={transactions.transactions ? transactions.transactions : []}/>
      </div>
      <CategoriesContainerDashboard categories={categoriesStats ? categoriesStats : []}/>
    </main>
  );
}