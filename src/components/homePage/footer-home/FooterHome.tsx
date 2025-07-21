import React from 'react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'

export const FooterHome = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white dark:bg-mode-dark dark:text-white-dark m-auto py-4 px-8'>
      <article className='flex flex-col justify-center items-center'>
        <h3 className='font-poppins text-4xl text-center py-4'>¿Tienes dudas?</h3>
        <p className='text-lg font-poppins text-center'>Contáctanos y te ayudaremos a resolverlas.</p>
      </article>
      <article className='flex flex-col justify-center items-center'>
        <h3 className='font-poppins text-4xl text-center py-4'>Síguenos en nuestras redes sociales</h3>
        <div className='flex gap-4'>
          <a href="https://www.instagram.com/" className='flex items-center' target="_blank" rel="Instagram Buhoon"><IoLogoInstagram size={20} className='mr-2'/> Instagram</a>
          <a href="https://www.facebook.com/" className='flex items-center' target="_blank" rel="Facebook Buhoon"><IoLogoFacebook size={20} className='mr-2'/> Facebook</a>
        </div>
      </article>
      <article className='flex flex-col justify-center items-center'>
        <h3 className='font-poppins text-4xl text-center py-4'>Contáctanos</h3>
        <p className='text-lg font-poppins text-center'>+57 000000000</p>
      </article>
    </footer>
  )
}