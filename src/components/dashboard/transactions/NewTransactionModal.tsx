'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUIStore } from "@/store"
import { Button, InputRadio, InputText, Modal } from "@/components/UI"
import { ButtonTypes, TypesTransaction } from "@/interfaces"
import { SelectCategories } from "../categories/SelectCategories"
import { startCreateTransaction } from "@/actions/transactionsActions"

export const NewTransactionModal = () => {
    const router = useRouter();
  const { isOpenCreateTransactionModal, toggleCreateTransactionModal } = useUIStore( state => state);
  const [errorMessage, setErrorMessage] = useState('');

  const createTransactionModal = async(form: FormData) => {
    const { ok, msg } = await startCreateTransaction(form);

    if(!ok){
        setErrorMessage(msg);
        return;
    }

    toggleCreateTransactionModal(false);
    router.refresh();
  }

  return (
    <Modal title="Registrar movimiento" isOpen={isOpenCreateTransactionModal} handleCloseModal={() => toggleCreateTransactionModal(false)}>
        <form>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionName">Nombre del movimiento</label>
                <InputText placeholder="Ingrese el nombre del movimiento" name="transactionName" id="transactionName" required/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionDescription">Descripción del movimiento (opcional)</label>
                <InputText placeholder="Ingrese una descripción del movimiento" name="transactionDescription" id="transactionDescription"/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold">Tipo de transacción</label>
                <InputRadio name="transactionType" options={[
                    { text: "Ingreso", value: TypesTransaction.INCOME, id: "transactionTypeIncome"},
                    { text: "Egreso", value: TypesTransaction.EXPENSE, id: "transactionTypeExpense"}
                ]}/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionCategory">Categoría</label>
                <SelectCategories id="transactionCategory" name="transactionCategory"/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionDate">Fecha del movimiento</label>
                <InputText name="transactionDate" type="date" id="transactionDate" required/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionValue">Monto</label>
                <InputText placeholder="Ingrese el monto del movimiento" name="transactionValue" type="text" id="transactionValue" required/>
            </span>
            {errorMessage && (<span className="text-red-500">{errorMessage}</span>)}
            <span className="w-full flex justify-end">
                <Button text="Crear transacción" typeButton={ButtonTypes.SUBMIT} formAction={createTransactionModal}/>
            </span>
        </form>
    </Modal>
  )
}