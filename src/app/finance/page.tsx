import { CategoriesContainerDashboard, LatestTransactionsContainer, MainDashboardStats } from "@/components/dashboard";
import { BreadcrumbItem } from "@/interfaces";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/finance" },
]

export default function HomeDashboardPage() {
  return (
    <main className="grid grid-cols-5 grid-rows-5 gap-4 w-full md:w-5/6 m-auto h-[80vh]">
        <MainDashboardStats breadCrumbItems={itemsBreadCrumb}/>
        <LatestTransactionsContainer/>
        <CategoriesContainerDashboard/>
    </main>
  );
}