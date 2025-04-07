'use client'
import { useMemo, useState } from "react"
import { SelectedOptionStats } from "./SelectedOptionStats"
import { SummaryLast } from "@/interfaces";

interface Props {
  summaryLastMonth?: SummaryLast;
  summaryLastYear?:  SummaryLast;
}

export const ContainerMainStats = ({ summaryLastMonth, summaryLastYear }: Props) => {
  const [optionSelected, setOptionSelected] = useState('total-money-month');
  const activeValue = useMemo(() => {
    switch (optionSelected) {
      case 'total-money-month':
        return summaryLastMonth?.total || 0;
      case 'money-spent-month':
        return summaryLastMonth?.spent || 0;
      case 'money-obtained-month':
        return summaryLastMonth?.obtained || 0;
      case 'total-money-year':
        return summaryLastYear?.total || 0;
      case 'money-spent-year':
        return summaryLastYear?.spent || 0;
      case 'money-obtained-year':
        return summaryLastYear?.obtained || 0;
      default:
        return 0;
    }
  }, [optionSelected, summaryLastMonth, summaryLastYear])

  const activeText = useMemo(() => {
    switch (optionSelected) {
      case 'total-money-month':
        return 'Total dinero del mes';
      case 'money-spent-month':
        return 'Dinero gastado del mes';
      case 'money-obtained-month':
        return 'Dinero obtenido del mes';
      case 'total-money-year':
        return 'Total dinero del año';
      case 'money-spent-year':
        return 'Dinero gastado del año';
      case 'money-obtained-year':
        return 'Dinero obtenido del año';
      default:
        return '';
    }
  }, [optionSelected])

  return (
    <section className="flex flex-col md:flex-row gap-4">
        {/* Menú Movil ultimo mes */}
        <article className="w-full block md:hidden">
          <h3 className="font-bold font-poppins text-lg mb-2">Ultimo mes</h3>
          <div className="flex gap-2">
            <SelectedOptionStats isActive={optionSelected === "total-money-month"} name="total-money-month" text="Total dinero" onClick={setOptionSelected}/>
            <SelectedOptionStats isActive={optionSelected === "money-spent-month"} name="money-spent-month" text="Dinero gastado" onClick={setOptionSelected}/>
            <SelectedOptionStats isActive={optionSelected === "money-obtained-month"} name="money-obtained-month" text="Dinero obtenido" onClick={setOptionSelected}/>
          </div>
        </article>
        {/* Menu escritorio */}
        <article className="w-2/5 hidden md:block">
          <h3 className="font-bold font-poppins text-lg mb-2">Ultimo mes</h3>
          <SelectedOptionStats isActive={optionSelected === "total-money-month"} name="total-money-month" text="Total dinero" onClick={setOptionSelected}/>
          <SelectedOptionStats isActive={optionSelected === "money-spent-month"} name="money-spent-month" text="Dinero gastado" onClick={setOptionSelected}/>
          <SelectedOptionStats isActive={optionSelected === "money-obtained-month"} name="money-obtained-month" text="Dinero obtenido" onClick={setOptionSelected}/>
          <h3 className="font-bold font-poppins text-lg mb-2">Ultimo año</h3>
          <SelectedOptionStats isActive={optionSelected === "total-money-year"} name="total-money-year" text="Total dinero" onClick={setOptionSelected}/>
          <SelectedOptionStats isActive={optionSelected === "money-spent-year"} name="money-spent-year" text="Dinero gastado" onClick={setOptionSelected}/>
          <SelectedOptionStats isActive={optionSelected === "money-obtained-year"} name="money-obtained-year" text="Dinero obtenido" onClick={setOptionSelected}/>
        </article>
        {/* Contenido */}
        <article className="w-full md:w-3/5 border rounded-lg border-gray flex flex-col justify-between items-center p-4">
            <p className="text-2xl font-bold">{activeText}</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold">$ {activeValue.toLocaleString("es-CO")}</p>
            <span></span>
        </article>
        {/* Menú Movil ultimo año */}
        <article className="w-full block md:hidden">
          <h3 className="font-bold font-poppins text-lg mb-2">Ultimo año</h3>
          <div className="flex gap-2">
          <SelectedOptionStats isActive={optionSelected === "total-money-year"} name="total-money-year" text="Total dinero" onClick={setOptionSelected}/>
          <SelectedOptionStats isActive={optionSelected === "money-spent-year"} name="money-spent-year" text="Dinero gastado" onClick={setOptionSelected}/>
          <SelectedOptionStats isActive={optionSelected === "money-obtained-year"} name="money-obtained-year" text="Dinero obtenido" onClick={setOptionSelected}/>
          </div>
        </article>
    </section>
  )
}