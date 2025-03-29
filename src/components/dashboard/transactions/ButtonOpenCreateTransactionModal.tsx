'use client'
import { Button } from "@/components/UI"
import { useUIStore } from "@/store";

export const ButtonOpenCreateTransactionModal = () => {
  const { toggleCreateTransactionModal } = useUIStore( state => state);

  return (
    <Button text="+ Registrar movimiento" onClick={() => toggleCreateTransactionModal(true)}/>
  )
}