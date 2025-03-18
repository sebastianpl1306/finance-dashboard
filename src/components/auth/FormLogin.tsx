'use client'
import { useState } from "react";
import { Button, InputText } from "@/components/UI";
import { ButtonTypes, ButtonVariant, TypeVariant } from "@/interfaces";

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form action="">
        <InputText placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <InputText placeholder="Contraseña" className="my-2" type={TypeVariant.PASSWORD} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button text="¿Olvidaste tu contraseña?" variant={ButtonVariant.LINK}/>
        <div className="flex flex-col items-center justify-center mt-10">
            <Button text="Iniciar Sesión" />
            <Button text="¿Aun no tienes una cuenta?" url="/auth/register" type={ButtonTypes.LINK} variant={ButtonVariant.LINK} className="mt-4"/>
        </div>
    </form>
  )
}
