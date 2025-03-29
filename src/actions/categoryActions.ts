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