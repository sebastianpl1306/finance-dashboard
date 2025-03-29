"use server";

import { encodedRedirect } from "@/utils/utils";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const checkPassword = formData.get("check-password")?.toString();
  const origin = (await headers()).get("origin");

  if (!name || !email || !password) {
    return encodedRedirect(
      "error",
      "/auth/register",
      "El correo y la contraseña son requeridos",
    );
  }

  if(checkPassword !== password) {
    return encodedRedirect(
      "error",
      "/auth/register",
      "Las contraseñas no coinciden",
    );
  }

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      origin
    }),
  }).then( data => data.json() );

  if(!data.ok) {
    return encodedRedirect("error", "/auth/register", data.message);
  }

  return encodedRedirect(
    "success",
    "/auth/login",
    "¡Gracias por registrarte! Revisa tu correo electrónico para ver el enlace de verificación.",
  );
};

export const signInAction = async (formData: FormData) => {
  const cookieStore = await cookies();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/auth/login",
      "El correo y la contraseña son requeridos",
    );
  }

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    }),
  }).then( data => data.json() );

  if(!data.ok) {
    return encodedRedirect("error", "/auth/register", data.message);
  }

  cookieStore.set('token', data.token);
  cookieStore.set('userId', data.uid);

  return redirect("/finance");
};

export const signOutAction = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  cookieStore.delete('userId');
  return redirect("/auth/login");
};