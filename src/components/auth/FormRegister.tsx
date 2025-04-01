'use client'
import { signUpAction } from "@/actions/authActions";
import { Button, FormMessage, InputText } from "@/components/UI";
import { ButtonTypes, ButtonVariant, Message, TypeVariant } from "@/interfaces";

interface Props {
  message?: Message;
}

export const FormRegister = ({ message }: Props) => {

  return (
    <form action="">
        <InputText placeholder="Nombre de usuario" className="my-2" name="name"/>
        <InputText placeholder="Correo electrónico" className="my-2" name="email"/>
        <InputText placeholder="Contraseña" className="my-2" type={TypeVariant.PASSWORD} name="password"/>
        <InputText placeholder="Confirmar Contraseña" className="my-2" type={TypeVariant.PASSWORD} name="check-password"/>
        {message && (<FormMessage message={message}/>)}
        <div className="flex flex-col items-center justify-center mt-10">
          <Button text="Crear cuenta" typeButton={ ButtonTypes.SUBMIT } formAction={signUpAction}/>
          <Button text="¿Ya tienes una cuenta?" url="/auth/login" typeButton={ButtonTypes.LINK} variant={ButtonVariant.LINK} className="mt-4"/>
        </div>
    </form>
  )
}