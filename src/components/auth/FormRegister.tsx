'use client'
import { useState } from "react";
import { Button, InputText } from "@/components/UI";
import { ButtonTypes, ButtonVariant, TypeVariant } from "@/interfaces";

export const FormRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form action="">
        <InputText placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <InputText placeholder="Contraseña" className="my-2" type={TypeVariant.PASSWORD} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <InputText placeholder="Confirmar Contraseña" className="my-2" type={TypeVariant.PASSWORD} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <div className="flex flex-col items-center justify-center mt-10">
            <Button text="Crear cuenta" />
            <Button text="¿Ya tienes una cuenta?" url="/auth/login" type={ButtonTypes.LINK} variant={ButtonVariant.LINK} className="mt-4"/>
        </div>
    </form>
  )
}