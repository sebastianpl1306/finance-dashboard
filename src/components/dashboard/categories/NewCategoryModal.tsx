'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUIStore } from "@/store";
import { startCreateCategory } from "@/actions/categoryActions";
import { Button, InputText, Modal } from "@/components/UI";
import { ButtonTypes } from "@/interfaces";
import { SelectTypeCategory } from "./SelectTypeCategory";

export const NewCategoryModal = () => {
  const router = useRouter();
  const { isOpenCreateCategoryModal, toggleCreateCategoryModal } = useUIStore( state => state);
  const [errorMessage, setErrorMessage] = useState('');

  const createCategoryModal = async(form: FormData) => {
      const { ok, msg } = await startCreateCategory(form);
  
      if(!ok){
          setErrorMessage(msg);
          return;
      }
  
      toggleCreateCategoryModal(false);
      router.refresh();
  }

  return (
    <Modal title="Crear categoría" isOpen={isOpenCreateCategoryModal} handleCloseModal={() => toggleCreateCategoryModal(false)}>
        <form>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryName">Nombre de la categoría</label>
                <InputText placeholder="Ingrese el nombre de la categoría" name="categoryName" id="categoryName" required/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryDescription">Descripción de la categoría (opcional)</label>
                <InputText placeholder="Ingrese una descripción la categoría" name="categoryDescription" id="categoryDescription"/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryDescription">Tipo</label>
                <SelectTypeCategory name="categoryType" id="categoryType"/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryColor">Color de la categoría</label>
                <input className="block" type="color" name="categoryColor" id="categoryColor"/>
            </span>
            {errorMessage && (<span className="text-red-500">{errorMessage}</span>)}
            <span className="w-full flex justify-end">
                <Button text="Crear categoría" typeButton={ButtonTypes.SUBMIT} formAction={createCategoryModal}/>
            </span>
        </form>
    </Modal>
  )
}