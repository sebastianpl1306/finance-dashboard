'use client'
import { Button } from '../UI'
import { ButtonTypes, ButtonVariant } from '@/interfaces'
import { getPortalPayment } from '@/actions/paymentActions';

interface Props {
  email: string;
  userId: string;
}

export const ButtonPaymentLink = ({ email, userId }: Props) => {

  const handleStartCheckout = async () => {
    if (!email || !userId) return;

    const { url } = await getPortalPayment(email, userId);
    if (!url) return;
    window.location.href = url
  }

  return (
    <Button className="my-4" typeButton={ButtonTypes.BUTTON} variant={ButtonVariant.SECONDARY} onClick={handleStartCheckout} text="Generar link de pago"/>
  )
}