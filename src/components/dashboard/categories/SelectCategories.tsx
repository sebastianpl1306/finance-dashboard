'use client'
import { starGetCategories } from "@/actions/categoryActions";
import { Select } from "@/components/UI"
import { Category } from "@/interfaces";
import { useEffect, useState } from "react"

interface Props {
  id?: string;
  name?: string;
}

export const SelectCategories = ({ id, name }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async() => {
        const allCategories = await starGetCategories();
        setCategories(allCategories);
    }

    getCategories();
  }, [])

  return (
    <Select name={name} id={id}>
        {
            categories.map(category => (
                <option value={category._id} key={category._id}>{category.name}</option>
            ))
        }
    </Select>
  )
}