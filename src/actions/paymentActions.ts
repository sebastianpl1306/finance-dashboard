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

export const getBillingInfo = async() => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');
        const userId = cookieStore.get('userId');

        const { ok, msg, subscriptions } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/membership/user/${userId?.value.replaceAll('"', '')}`, {
            cache: 'no-store',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            }
        }).then( data => data.json() );

        if(!ok) throw new Error(msg);

        return subscriptions[0];
    } catch (error) {
        console.error('[ERROR][getBillingInfo]', { error });
        return { transactions: [], pages: 0, currentPage: 1}
    }
}

/**
 * Permite generar un link para Stripe para el portal de pagos
 * @returns 
 */
export const getPortalPayment = async(email: string, userId: string) => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const { ok, msg, subscription }: ResponseGetPortalSession = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/membership`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            },
            body: JSON.stringify({
                userId: `${userId}`,
                email: email,
                planId: `plan_premium`,
                amount: 15000,
                frequency: 'monthly'
            })
        }).then( data => data.json() );

        console.log({ ok, msg, subscription });
        if(!ok) throw new Error(msg);

        return { url: subscription.initPoint, id: subscription.id };
    } catch (error) {
        console.error('[ERROR][starGetLinkDocuments]', { error });
        return { transactions: [], pages: 0, currentPage: 1}
    }
}