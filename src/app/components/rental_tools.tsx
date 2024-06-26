'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { RentalTool } from '../lib/interfaces/rental_tool';
import { displayErrorToast } from '../api/toast';
import Button from './button';

export default function RentalToolsComponent({ rowItems: rentalTools }: CardProps<RentalTool[]>) {

   return <div className='bg-white text-black rounded-badge shadow-xl hover:shadow-2xl px-10 py-2 m-5 border-solid border-[1px] border-brown'>

      <div className='flex items-center gap-5 my-5'>
         <Image
            src="/settings.png"
            alt='Rental Tools'
            width={40}
            height={4}
            className='bg-white' />
         <h1 className='text-3xl font-bold'>Rental Tools</h1>
      </div>

      <table className="table table-xs lg:table-md">
         <thead>
            <tr>
               <th>Work Order</th>
               <th>Tool Ref</th>
               <th>Team Member</th>
               <th>Status</th>
               <th>Duration</th>
               <th></th>
            </tr>
         </thead>

         <tbody>{rentalTools.map((rentalTool, index) => {
            return <tr key={index}>
               <td>{rentalTool.workorder}</td>
               <td>
                  <span className="bg-gray px-2 py-1 rounded-md">{rentalTool.toolref}</span>
               </td>
               <td className='flex items-center justify-center mt-2'>
                  <Image
                     src={rentalTool.teammember.memberImage}
                     alt="Team Member Iamge"
                     width={40}
                     height={40}
                     className="bg-black rounded-full mx-1 lg:mx-2" />

                  {rentalTool.teammember.memberName}

                  <Image
                     src={rentalTool.teammember.memberTrophy}
                     alt="Team Member Trophy"
                     width={15}
                     height={15}
                     className="rounded ml-1" />
               </td>
               <td>
                  <div className="flex items-center gap-2">
                     <div className={clsx(
                        "status rounded-full border-solid p-[5px] lg:p-2 border-1",
                        {
                           'bg-orange': rentalTool.status == 'Not Started',
                           'bg-primary': rentalTool.status == 'In Progress',
                           'bg-green': rentalTool.status == 'Completed',
                        }
                     )}></div>
                     {rentalTool.status}
                  </div>
               </td>
               <td className='font-bold'>{rentalTool.duration}</td>
               <td>
                  <Button buttonText='Details' />
               </td>
            </tr>
         })
         }
         </tbody>
      </table>
   </div>
}
