'use client';
import { ButtonTypes, ButtonVariant } from "@/interfaces";
import { Button } from "@/components/UI";
import { getPortalPayment } from "@/actions/paymentActions";
import { useMemo } from "react";

interface Props {
  status: 'pending' | 'active' | 'canceled';
  email: string;
  userId: string;
}

export const MembershipForm = ({ status, email, userId }: Props) => {
  const statusName = useMemo(() => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'active':
        return 'Activo';
      case 'canceled':
        return 'Cancelado';
      default:
        return 'Desconocido';
    }
  }, [status])

  const handleStartCheckout = async () => {
    if (!email || !userId) return;

    const { url } = await getPortalPayment(email, userId);
    if (!url) return;
    window.location.href = url
  }

  return (
    <form className="px-4">
        <p className="text-xl">Estado suscripción: <span className="font-bold">{statusName}</span></p>
        <Button className="my-4" typeButton={ButtonTypes.BUTTON} variant={ButtonVariant.SECONDARY} onClick={handleStartCheckout} text="Generar link de pago"/>
    </form>
  )
}