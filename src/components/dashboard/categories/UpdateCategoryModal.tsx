'use client'
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/store";
import { startUpdateCategory } from "@/actions/categoryActions";
import { Button, InputText, Modal } from "@/components/UI";
import { ButtonTypes } from "@/interfaces";
import { SelectTypeCategory } from "./SelectTypeCategory";

export const UpdateCategoryModal = () => {
  const router = useRouter();
  const { toggleUpdateCategoryModal, isOpenEditCategoryModal, currentCategory } = useCategoryStore(state => state);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (currentCategory) {
        setName(currentCategory.name);
        setDescription(currentCategory.description);
        setColor(currentCategory.color);
        setType(currentCategory.type);
    }

    return () => {
        setName('')
        setDescription('')
        setColor('')
        setType('')
    }
  }, [currentCategory])

  const updateCategoryModal = async(e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!currentCategory) {
        setErrorMessage("No se encontró la categoría");
        return;
      }

      const { ok, msg } = await startUpdateCategory(currentCategory?._id, name, description, color, type);
  
      if(!ok){
        setErrorMessage(msg);
        return;
      }
  
      toggleUpdateCategoryModal(false);
      router.refresh();
  }

  return (
    <Modal title="Actualizar categoría" isOpen={isOpenEditCategoryModal} handleCloseModal={() => toggleUpdateCategoryModal(false)}>
        <form onSubmit={updateCategoryModal}>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryName">Nombre de la categoría</label>
                <InputText
                    placeholder="Ingrese el nombre de la categoría"
                    name="categoryName"
                    id="categoryName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryDescription">Descripción de la categoría (opcional)</label>
                <InputText
                    placeholder="Ingrese una descripción la categoría"
                    name="categoryDescription"
                    id="categoryDescription"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryDescription">Descripción de la categoría (opcional)</label>
                <SelectTypeCategory id="categoryType" name="categoryType" value={type} onChange={(e) => setType(e.target.value)}/>
            </span>
            <span className="mb-4 block">
                <label className="font-semibold" htmlFor="categoryColor">Color de la categoría</label>
                <input className="block" type="color" name="categoryColor" id="categoryColor" value={color} onChange={(e) => setColor(e.target.value)}/>
            </span>
            {errorMessage && (<span className="text-red-500">{errorMessage}</span>)}
            <span className="w-full flex justify-end">
                <Button text="Actualizar categoría" typeButton={ButtonTypes.SUBMIT}/>
            </span>
        </form>
    </Modal>
  )
}