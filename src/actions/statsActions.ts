"use server"
import { ResponseGetGeneralStats } from "@/interfaces";
import { cookies } from "next/headers";

export const getGeneralStats = async () => {
    try {
        const cookieStore = await cookies()
        const cookieToken = cookieStore.get('token');

        const { ok, msg, summaryLastMonth, summaryLastYear }: ResponseGetGeneralStats = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats/getStats`, {
            method: 'GET',
            headers: {
                'x-token': `${cookieToken?.value.replaceAll('"', '')}`
            }
        }).then( data => data.json() );

        if(!ok || !summaryLastMonth || !summaryLastYear) throw new Error(msg);

        return { summaryLastMonth, summaryLastYear };
    } catch (error) {
        console.error('[ERROR][getGeneralStats]', { error });
        return {
            summaryLastMonth: {
                total: 0,
                obtained: 0,
                spent: 0
            },
            summaryLastYear: {
                total: 0,
                obtained: 0,
                spent: 0
            }
        }
    }
}