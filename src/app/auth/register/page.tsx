import Image from "next/image";
import { FormRegister } from "@/components/auth/FormRegister";
import { Message } from "@/interfaces";
import Link from "next/link";

export default async function RegisterPage(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <main className="bg-white dark:bg-mode-dark dark:text-white-dark w-full md:w-1/3 flex flex-col justify-between">
      <section className="p-8">
        <Link href="/" className="">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </section>
      <section className="w-full p-8">
        <h1 className="font-poppins font-extrabold text-4xl text-center mb-10">Crear cuenta</h1>
        <FormRegister message={searchParams}/>
      </section>
      <section className="p-8">
        <p className="font-poppins font-bold">Patrocinadores</p>
        <div className="flex">
          {/* <a href="#" className="mx-4">
            <Image src="/images/sponsor1.png" alt="sponsor1" width={50} height={50} />
          </a> */}
        </div>
      </section>
    </main>
  );
}