'use client'

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Navigation {
   navigationIcon: string;
   navigationState: boolean
}

export default function SideNavigation() {

   const [activeState, setActiveState] = React.useState(false);

   const navigationLinks: Navigation[] = [
      {
         navigationIcon: '/home.png',
         navigationState: !activeState
      },
      {
         navigationIcon: '/spare_parts.png',
         navigationState: activeState
      },
      {
         navigationIcon: '/spanner.png',
         navigationState: activeState
      },
      {
         navigationIcon: '/packages.png',
         navigationState: activeState
      }
   ]

   const pathName = usePathname();

   const handleNavigation = () => {
      setActiveState(!activeState);
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
                  onClick={handleNavigation}
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