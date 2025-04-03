'use client'
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTransactionStore } from "@/store";
import { startUpdateTransaction } from "@/actions/transactionsActions";
import { Button, InputRadio, InputText, Modal } from "@/components/UI";
import { ButtonTypes, TypesTransaction } from "@/interfaces";
import { SelectCategories } from "../categories";
import { FormatDate } from '../../../helpers/FormatDate';

export const UpdateTransactionModal = () => {
  const router = useRouter();
  const { toggleUpdateTransactionModal, isOpenEditTransactionModal, currentTransaction } = useTransactionStore(state => state);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (currentTransaction) {
      setName(currentTransaction.name);
      setDescription(currentTransaction.description);
      setType(currentTransaction.type);
      setCategory(currentTransaction.category._id);
      setDate(FormatDate(currentTransaction.date.toString()))
      setValue(currentTransaction.value.toString());
    }

    return () => {
      setName('');
      setDescription('');
      setType('');
      setCategory('');
      setDate('');
      setValue('');
      setErrorMessage('');
    }
  }, [currentTransaction])

  const updateTransactionModal = async(e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!currentTransaction) {
        setErrorMessage("No se encontró la transacción");
        return;
      }

      const { ok, msg } = await startUpdateTransaction(currentTransaction?._id, category, name, description, type, date, value);
  
      if(!ok){
        setErrorMessage(msg);
        return;
      }
  
      toggleUpdateTransactionModal(false);
      setErrorMessage('');
      router.refresh();
  }

  return (
    <Modal title="Actualizar transacción" isOpen={isOpenEditTransactionModal} handleCloseModal={() => toggleUpdateTransactionModal(false)}>
        <form onSubmit={updateTransactionModal}>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionName">Nombre del movimiento</label>
                <InputText
                  placeholder="Ingrese el nombre del movimiento"
                  name="transactionName"
                  id="transactionName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionDescription">Descripción del movimiento (opcional)</label>
                <InputText
                  placeholder="Ingrese una descripción del movimiento"
                  name="transactionDescription"
                  id="transactionDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
            </span>
            <span className="mb-4 block">
                <label className="font-semibold">Tipo de transacción</label>
                <InputRadio name="transactionType" onChange={(e) => setType(e.target.value)} options={[
                    { text: "Ingreso", value: TypesTransaction.INCOME, id: "transactionTypeIncome", checked: type === TypesTransaction.INCOME},
                    { text: "Egreso", value: TypesTransaction.EXPENSE, id: "transactionTypeExpense", checked: type === TypesTransaction.EXPENSE}
                ]}/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionCategory">Categoría</label>
                <SelectCategories id="transactionCategory" name="transactionCategory" value={category} onChange={(e) => setCategory(e.target.value)}/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionDate">Fecha del movimiento</label>
                <InputText
                  name="transactionDate"
                  type="date"
                  id="transactionDate"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="transactionValue">Monto</label>
                <InputText
                  placeholder="Ingrese el monto del movimiento"
                  name="transactionValue"
                  type="text"
                  id="transactionValue"
                  required
                  value={value}
                  onChange={(e) => setValue(e.target.value)}/>
            </span>
            {errorMessage && (<span className="text-red-500">{errorMessage}</span>)}
            <span className="w-full flex justify-end">
                <Button text="Actualizar transacción" typeButton={ButtonTypes.SUBMIT}/>
            </span>
        </form>
    </Modal>
  )
}