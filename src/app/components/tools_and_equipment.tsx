'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { ToolsAndEquipment } from '../lib/interfaces/tool_and_equipment';

export default function ToolsAndEquipmentAvailability({ rowItems: toolsAndEquipment }: CardProps<ToolsAndEquipment[]>) {

   return (
      <div className="bg-white text-black rounded-badge shadow-xl hover:shadow-2xl px-10 py-5 m-5 border-[1px] border-brown grow">

         <h1 className="text-3xl font-bold my-3">Tools And Equipment Availability</h1>

         <table className="table table-lg">

            <thead>
               <tr>
                  <th></th>
                  <th></th>
                  <th></th>
               </tr>
            </thead>

            <tbody>
               {toolsAndEquipment.map((toolsAndEquipment, index) => {
                  return <tr key={index}>
                     <td>
                        <Image src={toolsAndEquipment.toolIcon}
                           alt='Tools and Equipment Image'
                           width='50'
                           height='50' />
                     </td>

                     <td>{toolsAndEquipment.toolName}</td>

                     <td><div className={clsx('radial-progress w-14 h-14 text-sm md:w-20 md:h-20 md:text-base',
                        {
                           'text-orange': index == 0,
                           'text-green': index == 1,
                        }
                     )}
                        style={{
                           "--value": toolsAndEquipment.progress,
                           "--thickness": '5px'
                        }}
                        role="progressbar">{toolsAndEquipment.progress}%</div></td>
                  </tr>

               })}
            </tbody>

         </table>

      </div >
   );
}