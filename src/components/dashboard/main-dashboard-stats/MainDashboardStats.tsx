import Image from 'next/image';
import { BreadcrumbItem } from '@/interfaces';
import { Breadcrumb } from '@/components/UI';
import { ContainerMainStats } from './container-main-stats/ContainerMainStats';

interface Props {
    breadCrumbItems: BreadcrumbItem[];
}

export const MainDashboardStats = ({ breadCrumbItems }: Props) => {
  return (
    <section className="bg-white col-span-4 row-span-5 rounded-lg py-4 px-8">
        <nav className="mb-2">
            <h2 className="text-2xl font-bold">Inicio</h2>
            <Breadcrumb items={breadCrumbItems}/>
        </nav>
        <ContainerMainStats/>
        <article className="px-4 py-2">
            <h3 className="font-bold font-poppins text-lg mb-2">Patrocinadores</h3>
            <div className="flex gap-4">
                <a href="">
                <Image src="/images/logo.png" alt="sponsor-1" width={100} height={100}/>
                </a>
                <a href="">
                <Image src="/images/logo.png" alt="sponsor-1" width={100} height={100}/>
                </a>
                <a href="">
                <Image src="/images/logo.png" alt="sponsor-1" width={100} height={100}/>
                </a>
                <a href="">
                <Image src="/images/logo.png" alt="sponsor-1" width={100} height={100}/>
                </a>
            </div>
        </article>
    </section>
  )
}