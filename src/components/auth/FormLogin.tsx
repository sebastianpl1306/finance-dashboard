import { signInAction } from "@/actions/authActions";
import { Button, FormMessage, InputText } from "@/components/UI";
import { ButtonTypes, ButtonVariant, Message, TypeVariant } from "@/interfaces";

interface Props {
  message?: Message;
}

export const FormLogin = ({ message }: Props) => {

  return (
    <form action="">
        <InputText placeholder="Correo electrónico" name="email"/>
        <InputText placeholder="Contraseña" className="my-2" type={TypeVariant.PASSWORD} name="password"/>
        <Button text="¿Olvidaste tu contraseña?" variant={ButtonVariant.LINK}/>
        {message && (<FormMessage message={message}/>)}
        <div className="flex flex-col items-center justify-center mt-10">
            <Button text="Iniciar Sesión" typeButton={ ButtonTypes.SUBMIT } formAction={signInAction}/>
            <Button text="¿Aun no tienes una cuenta?" url="/auth/register" typeButton={ButtonTypes.LINK} variant={ButtonVariant.LINK} className="mt-4"/>
        </div>
    </form>
  )
}
