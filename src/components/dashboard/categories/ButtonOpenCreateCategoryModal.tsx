'use client'
import { Button } from "@/components/UI"
import { useUIStore } from "@/store";

export const ButtonOpenCreateCategoryModal = () => {
  const { toggleCreateCategoryModal } = useUIStore( state => state);

  return (
    <Button text="+ Crear categoría" onClick={() => toggleCreateCategoryModal(true)}/>
  )
}