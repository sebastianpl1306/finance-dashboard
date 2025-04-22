import { months } from "@/constants";

export const getMonthName = (month: number) => {
    return months[month - 1] || "Mes no válido";
}