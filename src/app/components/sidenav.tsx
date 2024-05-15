'use client'

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function SideNavigation(){

   const pathName = usePathname();

   return <nav className="side-navigation w-22 bg-brown min-h-screen flex flex-col justify-between items-center p-6">

      <Image
         src='/logo.png'
         alt='Side Navigation Image'
         width='50'
         height='50' />

      <div className="icons flex flex-col gap-2">
         <Image
            className='active bg-darkbrown p-3 rounded-lg'
            src='/settings.png'
            alt='Side Navigation Image'
            width='50'
            height='50' />

         <Image
            className='p-3'
            src='/settings.png'
            alt='Side Navigation Image'
            width='50'
            height='50' />

         <Image
            className='p-3'
            src='/settings.png'
            alt='Side Navigation Image'
            width='50'
            height='50' />

         <Image
            className='p-3'
            src='/settings.png'
            alt='Side Navigation Image'
            width='50'
            height='50' />
      </div>

      <Image
         className='bg-white rounded-full p-3 cursor-pointer'
         src='/settings.png'
         alt='Side Navigation Image'
         width='50'
         height='50' />

   </nav>

}