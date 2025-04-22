"use server"
import { cookies } from "next/headers";
import { ResponseGetCategory } from "@/interfaces";

/**
 * Permite obtener las categorías
 * @returns 
 */
export const starGetCategories = async() => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const { ok, msg, categories }: ResponseGetCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/getAll`, {
            method: 'GET',
            headers: {
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            }
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return categories;
    } catch (error) {
        console.error('[ERROR][starGetLinkDocuments]', { error });
        return []
    }
}

/**
 * Permite crear categorías
 */
export const startCreateCategory = async(formData: FormData) => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const name = formData.get("categoryName")?.toString();
        const description = formData.get("categoryDescription")?.toString();
        const color = formData.get("categoryColor")?.toString();
        const type = formData.get("categoryType")?.toString();

        if (!name || !color || !type) {
            return {
                ok: false,
                msg: 'Llene todos los campos obligatorios'
            }
        }

        const { ok, msg } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            },
            body: JSON.stringify({
              name,
              description,
              color,
              type
            }),
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { ok, msg }
    } catch (error) {
        console.error('[ERROR][startCreateCategory]', { error });
        return { ok: false, msg: "Ups! Ocurrió un error" }
    }
}

/**
 * Permite actualizar categorías
 */
export const startUpdateCategory = async(idCategory: string, name?: string, description?: string, color?: string, type?: string) => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        if (!name || !color || !type) {
            return {
                ok: false,
                msg: 'Llene todos los campos obligatorios'
            }
        }

        const { ok, msg } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            },
            body: JSON.stringify({
              idCategory,
              name,
              description,
              color,
              type
            }),
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { ok, msg }
    } catch (error) {
        console.error('[ERROR][startUpdateCategory]', { error });
        return { ok: false, msg: "Ups! Ocurrió un error" }
    }
}