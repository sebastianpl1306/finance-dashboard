import { Button } from "@/components/UI"
import { LatestTransactionItem } from "./LatestTransactionItem"
import { ButtonTypes, ButtonVariant } from "@/interfaces"

export const LatestTransactionsContainer = () => {
  return (
    <section className="bg-white row-span-5 col-start-5 rounded-lg p-2 overflow-y-scroll">
        <h3 className="font-bold font-poppins text-lg mb-2">Últimos movimientos</h3>
        <div className="flex justify-end">
        <Button text="+ Registrar movimiento"/>
        </div>
        <section className="mt-2 px-2">
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        <hr className="border-gray"/>
        <LatestTransactionItem/>
        </section>
        <section className="my-4">
            <Button text="Ver mas" url="/dashboard/transactions" type={ButtonTypes.LINK} variant={ButtonVariant.LINK}/>
        </section>
    </section>
  )
}