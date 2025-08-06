import { BreadcrumbItem } from "@/interfaces";
import { Breadcrumb } from "@/components/UI";
import { MembershipForm } from "@/components/config/MembershipForm";

import { getBillingInfo } from "@/actions/paymentActions";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/" },
  { name: "Cuenta", url: "/config/account" },
]

export default async function AccountPage() {
  const membershipInfo = await getBillingInfo();

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll mt-10">
      <Breadcrumb items={itemsBreadCrumb} title="Administrar cuenta"/>
      <section className="py-14 w-full">
        <article className="border mb-4">
          <h4 className="text-2xl font-poppins text-black dark:text-white-dark font-bold px-2 py-4 bg-white dark:bg-mode-dark">Planes y facturación</h4>
          <MembershipForm status={membershipInfo.status} email={membershipInfo.email} userId={membershipInfo.userId}/>
        </article>
      </section>
    </main>
  );
}