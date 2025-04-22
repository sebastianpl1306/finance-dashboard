'use client'
import { Select } from "@/components/UI"
import { TypesTransaction } from "@/interfaces";
import { ChangeEvent } from "react"

interface Props {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectTypeCategory = ({ id, name, value, onChange }: Props) => {

  return (
    <Select name={name} id={id} onChange={onChange} value={value}>
        <option value={TypesTransaction.INCOME}>Ingreso</option>
        <option value={TypesTransaction.EXPENSE}>Egreso</option>
    </Select>
  )
}