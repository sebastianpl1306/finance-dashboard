"use server"
import { cookies } from "next/headers";
import { ResponseCreateTransaction, ResponseGetTransactions } from "@/interfaces";

/**
 * Permite obtener las transacciones
 * @returns 
 */
export const starGetTransactions = async(currentPage: number) => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        if(isNaN(currentPage)){
            return { transactions: [], pages: 0, currentPage: 1}
        }

        const { ok, msg, page, totalPages, transactions }: ResponseGetTransactions = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
            method: 'GET',
            headers: {
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            }
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { transactions: transactions, pages: totalPages, currentPage: page };
    } catch (error) {
        console.error('[ERROR][starGetLinkDocuments]', { error });
        return { transactions: [], pages: 0, currentPage: 1}
    }
}

/**
 * Permite crear una transacción
 */
export const startCreateTransaction = async(formData: FormData) => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const name = formData.get("transactionName")?.toString();
        const description = formData.get("transactionDescription")?.toString();
        const date = formData.get("transactionDate")?.toString();
        const value = formData.get("transactionValue")?.toString();
        const categoryId = formData.get("transactionCategory")?.toString();
        const type = formData.get("transactionType")?.toString();

        if (!name || !date || !value || !categoryId || !type) {
            return {
                ok: false,
                msg: 'Llene todos los campos obligatorios'
            }
        }

        const { ok, msg, transaction }: ResponseCreateTransaction = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            },
            body: JSON.stringify({
              name,
              description,
              date,
              value,
              categoryId,
              type
            }),
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { ok, msg, transaction }
    } catch (error) {
        console.error('[ERROR][startCreateTransaction]', { error });
        return { ok: false, msg: "Ups! Ocurrió un error" }
    }
}