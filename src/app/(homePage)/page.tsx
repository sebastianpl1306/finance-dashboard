import Image from "next/image";
import { Button, Card } from "@/components/UI";
import { ButtonTypes } from "@/interfaces";
import { IoCashOutline, IoCheckmark, IoCloseCircleOutline, IoEyeOutline, IoStar } from "react-icons/io5";

export default function HomePage() {
  return (
    <main>
      <section className="w-full h-[70vh] flex justify-center items-center flex-col" style={{backgroundImage: "url('/images/home-background.webp')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <h1 className="font-poppins text-5xl text-white text-shadow-lg">Toma el control de tu dinero, sin complicaciones</h1>
        <h2 className="font-poppins text-xl text-white text-shadow-lg">Registra tus ingresos y egresos fácilmente, y descubre en qué se va tu dinero día a día.</h2>
        <Button text="Empieza ahora" typeButton={ButtonTypes.LINK} url="/auth/register" className="my-10"/>
      </section>
      <section className="flex justify-around py-14 w-full md:w-5/6 m-auto bg-white dark:bg-mode-dark mb-10">
        <Image src="/images/background2.jpg" alt="finances" width={600} height={600} className="shadow-lg"/>
        <article className="p-4">
          <h3 className="text-5xl font-poppins text-black dark:text-white-dark font-bold mb-4">Diseñado para ayudarte a mejorar tus finanzas personales</h3>
          <ul className="pl-8 text-lg font-poppins text-black dark:text-white-dark">
            <li className="my-2 p-4 flex items-center border-b"><IoCashOutline size={50} className="mr-4"/> Registra cada ingreso y gasto en segundos</li>
            <li className="my-2 p-4 flex items-center border-b"><IoEyeOutline size={50} className="mr-4"/> Visualiza tus movimientos diarios, semanales o mensuales</li>
            <li className="my-2 p-4 flex items-center border-b"><IoCloseCircleOutline size={50} className="mr-4"/> Sin bancos, sin complicaciones</li>
            <li className="my-2 p-4 flex items-center border-b"><IoCheckmark size={50} className="mr-4"/>Interfaz limpia y fácil de usar</li>
          </ul>
        </article>
      </section>
      <section className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-5/6 m-auto rounded-lg py-4 px-8">
        <h3 className="font-poppins text-4xl text-center py-4">¿Que dicen nuestros usuarios?</h3>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          <Card className="p-4">
            <div className="my-2 flex">
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
            </div>
            <p>&quot;Antes no sabía en qué se iba mi plata. Ahora con esta aplicación, veo todo claro y gasto con más conciencia.&quot;</p>
            <div className="flex w-full flex-col justify-end items-center p-4">
              <Image src="/images/user1.jpg" alt="user1" width={100} height={100} className="rounded-full mr-2"/>
              <p className="font-poppins text-lg font-semibold">Juan Pérez</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="my-2 flex">
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
            </div>
            <p>&quot;Estaba buscando una forma de tener control de en que estaba gastando mi dinero y lo encontré aca&quot;</p>
            <div className="flex w-full flex-col justify-end items-center p-4">
              <Image src="/images/user3.jpg" alt="user2" width={100} height={100} className="rounded-full mr-2"/>
              <p className="font-poppins text-lg font-semibold">Camilo P.</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="my-2 flex">
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
              <IoStar size={30} className="text-yellow-500"/>
            </div>
            <p>&quot;La aplicación es muy fácil de usar y tiene todo lo que yo necesito&quot;</p>
            <div className="flex w-full flex-col justify-end items-center p-4">
              <Image src="/images/user2.webp" alt="user2" width={100} height={100} className="rounded-full mr-2"/>
              <p className="font-poppins text-lg font-semibold">Sebastian L.</p>
            </div>
          </Card>
        </article>
      </section>
      <section className="flex justify-around py-14 w-full md:w-5/6 m-auto bg-secondary p-10 mt-10">
        <Image src="/images/auth-background.webp" alt="finances" width={600} height={600} className="shadow-lg"/>
        <article className="p-4">
          <h3 className="text-5xl font-poppins text-white dark:text-white-dark font-bold mb-4">Empieza a organizar tus finanzas hoy mismo</h3>
          <h4 className="text-xl font-poppins text-white dark:text-white-dark font-bold mb-4">Tu futuro financiero empieza con un solo registro. ¡Hazlo fácil!</h4>
          <Button text="Empieza ahora" typeButton={ButtonTypes.LINK} url="/auth/register" className="w-60 my-4"/>
        </article>
      </section>
      <section className="py-14 w-full md:w-5/6 m-auto">
        <h3 className="font-poppins text-4xl text-center py-4 text-black dark:text-white-dark">Preguntas frecuentes (FAQ)</h3>
        <article className="border mb-4">
          <h4 className="text-2xl font-poppins text-black dark:text-white-dark font-bold px-2 py-4 bg-white dark:bg-mode-dark">¿Cuanto cuesta?</h4>
          <p className="text-lg font-poppins text-black dark:text-white-dark p-4">La aplicación ofrece una prueba gratuita y después de finalizar este periodo tiene un plan mensual de $15.000 COP</p>
        </article>
        <article className="border mb-4">
          <h4 className="text-2xl font-poppins text-black dark:text-white-dark font-bold px-2 py-4 bg-white dark:bg-mode-dark">¿Necesito conectar mis cuentas bancarias?</h4>
          <p className="text-lg font-poppins text-black dark:text-white-dark p-4">No, todo lo registras tú manualmente.</p>
        </article>
        <article className="border mb-4">
          <h4 className="text-2xl font-poppins text-black dark:text-white-dark font-bold px-2 py-4 bg-white dark:bg-mode-dark">¿Puedo usarlo desde el celular?</h4>
          <p className="text-lg font-poppins text-black dark:text-white-dark p-4">Sí, es compatible con móvil y escritorio.</p>
        </article>
      </section>
    </main>
  );
}
