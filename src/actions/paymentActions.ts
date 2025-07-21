"use server"
import { ResponseGetCheckoutSession, ResponseGetPortalSession } from "@/interfaces";
import { cookies } from "next/headers";

/**
 * Permite generar un link de pago para Stripe
 * @returns 
 */
export const starCheckoutPayment = async() => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const { ok, msg, session }: ResponseGetCheckoutSession = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/membership/checkout`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            }
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { url: session.url, id: session.id };
    } catch (error) {
        console.error('[ERROR][starGetLinkDocuments]', { error });
        return { transactions: [], pages: 0, currentPage: 1}
    }
}

/**
 * Permite generar un link para Stripe para el portal de pagos
 * @returns 
 */
export const getPortalPayment = async() => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const { ok, msg, session }: ResponseGetPortalSession = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/membership/create-portal-session`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            }
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return { url: session.url, id: session.id };
    } catch (error) {
        console.error('[ERROR][starGetLinkDocuments]', { error });
        return { transactions: [], pages: 0, currentPage: 1}
    }
}