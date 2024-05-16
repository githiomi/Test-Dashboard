'use client'

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { displayErrorToast } from "../services/toast";

interface Navigation {
   navigationIcon: string;
   navigationState: boolean
}

export default function SideNavigation() {

   const navigationLinks: Navigation[] = [
      {
         navigationIcon: '/home.png',
         navigationState: true
      },
      {
         navigationIcon: '/spare_parts.png',
         navigationState: false
      },
      {
         navigationIcon: '/spanner.png',
         navigationState: false
      },
      {
         navigationIcon: '/packages.png',
         navigationState: false
      }
   ]

   const displayToast = () => {
      displayErrorToast("This feature will be implemented soon. Kindly bear with us");
   }

   return <nav className="side-navigation w-22 bg-brown min-h-screen flex flex-col justify-between items-center p-6">

      <Image
         src='/logo.png'
         alt='Side Navigation Image'
         width='50'
         height='50' />

      <div className="icons flex flex-col gap-2">
         {
            navigationLinks.map((navigationLink, index) => {
               return <Image
                  key={index}
                  className={clsx('p-3 rounded-lg',
                     {
                        'bg-darkbrown': navigationLink.navigationState == true
                     })
                  }
                  src={navigationLink.navigationIcon}
                  alt='Side Navigation Image'
                  onClick={displayToast}
                  width={60}
                  height={60} />
            })
         }
      </div>

      <Image
         className='bg-white rounded-full p-3 cursor-pointer'
         src='/settings.png'
         alt='Side Navigation Image'
         width='50'
         height='50' />

   </nav>

}