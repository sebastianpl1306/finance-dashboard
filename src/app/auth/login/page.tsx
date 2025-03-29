import { FormLogin } from "@/components/auth/FormLogin";
import { Message } from "@/interfaces";
import Image from "next/image";

export default async function LoginPage(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <main className="bg-white w-full md:w-1/3 flex flex-col justify-between">
      <section className="p-8">
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </section>
      <section className="w-full p-8">
        <h1 className="font-poppins font-extrabold text-4xl text-center mb-10">Inicio de sesión</h1>
        <FormLogin message={searchParams}/>
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