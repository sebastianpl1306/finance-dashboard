import { Button } from "@/components/UI"
import { LatestTransactionItem } from "./LatestTransactionItem"
import { ButtonTypes, ButtonVariant, Transaction } from "@/interfaces"
import { ButtonOpenCreateTransactionModal, NewTransactionModal } from "../transactions";
import { IoDocumentOutline } from "react-icons/io5";

interface Props {
  transactions: Transaction[];
}

export const LatestTransactionsContainer = ({ transactions }: Props) => {
  return (
    <section className="bg-white dark:bg-mode-dark dark:text-white-dark col-span-5 row-span-2 row-start-3 xl:row-span-4 xl:col-span-2 xl:col-start-4 rounded-lg p-2 overflow-y-scroll hidden xl:block">
        <h3 className="font-bold font-poppins text-lg mb-2">Últimos movimientos</h3>
        <div className="flex justify-end">
          <ButtonOpenCreateTransactionModal/>
        </div>
        {transactions.length === 0 && (
          <section className="h-full flex items-center justify-center flex-col text-center text-gray-500">
            <IoDocumentOutline size={48} />
            <p>No hay movimientos recientes.</p>
          </section>
        )}
        {transactions.length > 0 && (
          <section>
            <section className="mt-2 px-2">
              {
                transactions.map((transaction) => (
                  <div key={transaction._id}>
                    <LatestTransactionItem transaction={transaction}/>
                    <hr className="border-gray"/>
                  </div>
                ))
              }
            </section>
            <section className="my-4">
              <Button text="Ver mas" url="/finance/transactions" typeButton={ButtonTypes.LINK} variant={ButtonVariant.LINK}/>
            </section>
          </section>
        )}
        <NewTransactionModal/>
    </section>
  )
}