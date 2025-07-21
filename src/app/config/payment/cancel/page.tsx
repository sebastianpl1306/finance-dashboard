import { Button } from "@/components/UI";
import { ButtonTypes } from "@/interfaces";
import { IoCloseCircleOutline } from "react-icons/io5";

export default async function PaymentCancelPage() {

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 mt-10">
      <section className="py-14 w-full flex flex-col items-center">
        <p className="text-center font-bold font-poppins text-4xl mb-10">Pago cancelado</p>
        <IoCloseCircleOutline size={150} className="text-red-500"/>
        <p className="text-center text-lg font-poppins mt-10">El pago ha sido cancelado, no se ha realizado ningún cargo a tu cuenta.</p>
        <p className="text-center text-lg font-poppins mt-10">Si tienes alguna duda, por favor contacta a nuestro soporte.</p>
        <Button url="/finance" typeButton={ButtonTypes.LINK} text="Volver al inicio" className="mt-10 transition duration-200"/>
      </section>
    </main>
  );
}