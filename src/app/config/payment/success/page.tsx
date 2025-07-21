import { Button } from "@/components/UI";
import { ButtonTypes } from "@/interfaces";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function PaymentSuccessPage() {

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto h-[80vh] rounded-lg py-4 px-8 mt-10">
      <section className="py-14 w-full flex flex-col items-center">
        <p className="text-center font-bold font-poppins text-4xl mb-10">Pago exitoso</p>
        <IoCheckmarkCircleOutline size={150} className="text-green-500"/>
        <p className="text-center text-lg font-poppins mt-10">Gracias por tu compra, tu suscripción ha sido activada.</p>
        <p className="text-center text-lg font-poppins mt-10">Recibirás un correo electrónico con los detalles de tu compra.</p>
        <Button url="/finance" typeButton={ButtonTypes.LINK} text="Volver al inicio" className="mt-10 transition duration-200"/>
      </section>
    </main>
  );
}