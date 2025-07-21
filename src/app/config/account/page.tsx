'use client';
import { BreadcrumbItem, ButtonTypes, ButtonVariant } from "@/interfaces";
import { Breadcrumb, Button } from "@/components/UI";
import { getPortalPayment } from "@/actions/paymentActions";

const itemsBreadCrumb: BreadcrumbItem[] = [
  { name: "Inicio", url: "/" },
  { name: "Cuenta", url: "/config/account" },
]

export default function AccountPage() {

  const handleStartCheckout = async () => {
    const { url } = await getPortalPayment();
    if (!url) return;
    window.location.href = url
  }

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll mt-10">
      <Breadcrumb items={itemsBreadCrumb} title="Administrar cuenta"/>
      <section className="py-14 w-full">
        <article className="border mb-4">
          <h4 className="text-2xl font-poppins text-black dark:text-white-dark font-bold px-2 py-4 bg-white dark:bg-mode-dark">Planes y facturación</h4>
          <p className="px-4 py-2 text-center">
            <Button typeButton={ButtonTypes.BUTTON} variant={ButtonVariant.LINK} onClick={handleStartCheckout} text="Administrar mi plan y facturación"/>
          </p>
        </article>
      </section>
    </main>
  );
}