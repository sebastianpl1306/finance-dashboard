'use client'
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5"
import { transformParamsTransactions } from "@/helpers";

interface Props {
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({ currentPage, totalPages }: Props) => {
  const pathname = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams()
  const nextNumber = useMemo(() => {
    const number = Math.round((currentPage + 5) / 10) * 10;
    return number === 0 ? 10 : number;
  }, [currentPage])

  const isShowNextPages = useMemo(() => totalPages >= nextNumber, [nextNumber, totalPages]);

  const handleChangePage = (nextPage: number) => {
    if(nextPage > totalPages || nextPage <= 0) return;
    router.push(`${pathname}${transformParamsTransactions(nextPage.toString(), searchParams.get('month'), searchParams.get('year'))}`);
    router.refresh();
  }

  return (
    <div className="w-full flex justify-center">
        <button onClick={() => handleChangePage(currentPage - 1)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer"><IoArrowBackOutline /></button>
        <button onClick={() => handleChangePage(1)} className={`text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer ${currentPage === 1 ? 'bg-primary' : ''}`}>1</button>
        {currentPage >= 5 && (<span className="text-secondary text-xl mx-1 px-3 py-1 rounded-full">...</span>)}
        { currentPage < 5 ? (
            <div>
                {totalPages >= 2 && (<button onClick={() => handleChangePage(2)} className={`text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer ${currentPage === 2 ? 'bg-primary' : ''}`}>2</button>)}
                {totalPages >= 3 && (<button onClick={() => handleChangePage(3)} className={`text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer ${currentPage === 3 ? 'bg-primary' : ''}`}>3</button>)}
                {totalPages >= 4 && (<button onClick={() => handleChangePage(4)} className={`text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer ${currentPage === 4 ? 'bg-primary' : ''}`}>4</button>)}
                {totalPages >= 5 && (<button onClick={() => handleChangePage(5)} className={`text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer ${currentPage === 5 ? 'bg-primary' : ''}`}>5</button>)}
            </div>
        ): (
            <div>
                {!(currentPage + 3 <= totalPages) && (<button onClick={() => handleChangePage(currentPage - 3)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer">{currentPage - 3 }</button>)}
                {!(currentPage + 3 <= totalPages) && (<button onClick={() => handleChangePage(currentPage - 2)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer">{currentPage - 2 }</button>)}
                <button onClick={() => handleChangePage(currentPage - 1)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer">{currentPage - 1 }</button>
                <button onClick={() => handleChangePage(currentPage)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full bg-primary cursor-pointer">{currentPage}</button>
                {currentPage + 1 <= totalPages && (<button onClick={() => handleChangePage(currentPage + 1)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer">{currentPage + 1 }</button>)}
            </div>
        )}
        {currentPage + 3 <= totalPages && isShowNextPages && (<span className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer">...</span>)}
        {currentPage + 3 <= totalPages && isShowNextPages && ( <button onClick={() => handleChangePage(nextNumber)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer">{nextNumber}</button>)}
        <button onClick={() => handleChangePage(currentPage + 1)} className="text-secondary text-xl mx-1 px-3 py-1 rounded-full cursor-pointer"><IoArrowForwardOutline /></button>
    </div>
  )
}