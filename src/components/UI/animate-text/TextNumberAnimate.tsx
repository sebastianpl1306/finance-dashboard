'use client'
import { useEffect } from "react"
import { useMotionValue, motion, animate } from "motion/react"

interface Props {
  value: number;
}

export const TextNumberAnimate = ({ value }: Props) => {
    const count = useMotionValue(0)

    useEffect(() => {
      const controls = animate(count, value, { duration: 1 })
      return () => controls.stop()
    }, [count, value])

    return <motion.span>{count}</motion.span>
}