'use client'
import { useState } from "react"
import { SelectedOptionStats } from "./SelectedOptionStats"

export const ContainerMainStats = () => {
  const [optionSelected, setOptionSelected] = useState('total-money-month');

  return (
    <section className="flex gap-4">
        <article className="w-2/5">
            <h3 className="font-bold font-poppins text-lg mb-2">Ultimo mes</h3>
            <SelectedOptionStats isActive={optionSelected === "total-money-month"} name="total-money-month" text="Total dinero" onClick={setOptionSelected}/>
            <SelectedOptionStats isActive={optionSelected === "money-spent-month"} name="money-spent-month" text="Dinero gastado" onClick={setOptionSelected}/>
            <SelectedOptionStats isActive={optionSelected === "money-obtained-month"} name="money-obtained-month" text="Dinero obtenido" onClick={setOptionSelected}/>
            <h3 className="font-bold font-poppins text-lg mb-2">Ultimo año</h3>
            <SelectedOptionStats isActive={optionSelected === "total-money-year"} name="total-money-year" text="Total dinero" onClick={setOptionSelected}/>
            <SelectedOptionStats isActive={optionSelected === "money-spent-year"} name="money-spent-year" text="Dinero gastado" onClick={setOptionSelected}/>
            <SelectedOptionStats isActive={optionSelected === "money-obtained-year"} name="money-obtained-year" text="Dinero obtenido" onClick={setOptionSelected}/>
        </article>
        <article className="w-3/5 border rounded-lg border-gray flex flex-col justify-between items-center p-4">
            <p className="text-2xl font-bold">Total dinero febrero 2025</p>
            <p className="text-8xl font-extrabold">$ 2.732.535</p>
            <span></span>
        </article>
    </section>
  )
}