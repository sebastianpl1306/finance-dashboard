import { Button } from "@/components/UI"
import { LatestTransactionItem } from "./LatestTransactionItem"
import { ButtonTypes, ButtonVariant, Transaction } from "@/interfaces"
import { ButtonOpenCreateTransactionModal, NewTransactionModal } from "../transactions";

interface Props {
  transactions: Transaction[];
}

export const LatestTransactionsContainer = ({ transactions }: Props) => {
  return (
    <section className="bg-white col-span-5 row-span-2 row-start-3 xl:row-span-4 xl:col-span-2 xl:col-start-4 rounded-lg p-2 overflow-y-scroll">
        <h3 className="font-bold font-poppins text-lg mb-2">Últimos movimientos</h3>
        <div className="flex justify-end">
          <ButtonOpenCreateTransactionModal/>
        </div>
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
        <NewTransactionModal/>
    </section>
  )
}