import { ButtonPaymentLink } from "@/components/config/ButtonPaymentLink";
import { getBillingInfo } from "@/actions/paymentActions";

export default async function PaymentPage() {
  const membershipInfo = await getBillingInfo();

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 overflow-y-scroll mt-10">
      <section className="py-5 w-full">
        <article className="mb-4">
          <p className="font-bold text-xl font-poppins text-center mb-20">Elegir el plan al que se desea suscribir</p>
          <section className="grid grid-cols-1 md:grid-cols-3">
            <article className="shadow-2xl">
              <div className="bg-white dark:bg-mode-dark rounded-lg p-4">
                <h2 className="text-center text-4xl font-bold mb-10">Plan Básico</h2>
                <p className="text-center text-lg">Ideal para uso personal</p>
                <p className="text-center text-xl font-bold">$20.000 COP/mes</p>
                <div className="flex justify-center">
                  <ButtonPaymentLink email={membershipInfo.email} userId={membershipInfo.userId} />
                </div>
                {/* <a href="https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c93808496df03450196edb8078106be">Suscribirme</a> */}
                {/* <Button className="mt-4 w-full" onClick={handleStartCheckout} text="Suscribirse"/> */}
              </div>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
}