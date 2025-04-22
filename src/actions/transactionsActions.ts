"use server"
import { cookies } from "next/headers";
import { ResponseCreateTransaction, ResponseGetTransactions, ResponseGetTransactionsDates } from "@/interfaces";

/**
 * Permite obtener las transacciones
 * @returns 
 */
export const starGetTransactions = async(currentPage: number, month?: number, year?: number) => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');
        let startDate;
        let finishDate;

        if(month && year) {
            startDate = new Date(year, month - 1, 1);
            finishDate = new Date(year, month, 1);
        }

        if(isNaN(currentPage)){
            return { transactions: [], pages: 0, currentPage: 1}
        }

        const { ok, msg, page, totalPages, transactions }: ResponseGetTransactions = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction?page=${currentPage}`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            },
            body: JSON.stringify({
                startDate: startDate,
                finishDate: finishDate
            })
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

/**
 * Permite actualizar las transacciones
 */
export const startUpdateTransaction = async(
    idTransaction: string,
    categoryId?: string,
    name?: string,
    description?: string,
    type?: string,
    date?: string,
    value?: string,
) => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        if (!name || !date || !value || !categoryId || !type) {
            return {
                ok: false,
                msg: 'Llene todos los campos obligatorios'
            }
        }

        const { ok, msg } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            },
            body: JSON.stringify({
              idTransaction,
              categoryId,
              name,
              description,
              type,
              date,
              value
            }),
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { ok, msg }
    } catch (error) {
        console.error('[ERROR][startUpdateTransaction]', { error });
        return { ok: false, msg: "Ups! Ocurrió un error" }
    }
}

/**
 * Permite obtener las fechas de las transacciones
 * @returns Meses y años en los que se han realizado transacciones
 */
export const getTransactionsDates = async() => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const { ok, msg, dates }: ResponseGetTransactionsDates = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction/get-dates`, {
            method: 'GET',
            headers: {
              'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            }
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { ok, msg, dates }
    } catch (error) {
        console.error('[ERROR][getTransactionsDates]', { error });
        return { ok: false, msg: "Ups! Ocurrió un error" }
        
    }
}