import React from 'react'

export const LatestTransactionItem = () => {
  return (
    <article className='my-2'>
        <div className='flex justify-between'>
            <p>Patineta scooter</p>
            <p className='font-bold text-red-500'>- $87.550</p>
        </div>
        <div className='flex justify-between'>
            <span className='bg-gray rounded-4xl text-sm px-2'>Entretenimiento</span>
            <p className='text-sm'>3/02/2025</p>
        </div>
    </article>
  )
}