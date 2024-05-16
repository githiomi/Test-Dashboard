import Image from 'next/image';
import clsx from 'clsx';

interface ToolsAndEquipment {
   toolIcon: string;
   toolName: string;
   progress: number;
}

export default function ToolsAndEquipmentAvailability() {

   const toolsAndEquipment: ToolsAndEquipment[] = [
      {
         toolIcon: '/spanner.png',
         toolName: 'Rental Items',
         progress: 50
      },
      {
         toolIcon: '/spare_parts.png',
         toolName: 'Spare Parts',
         progress: 75
      }
   ];

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

                     <td><div className={clsx('radial-progress',
                        {
                           'bg-orange text-white': index == 0,
                           'bg-green text-white': index == 1,
                        }
                     )}
                        style={{ "--value": toolsAndEquipment.progress }}
                        role="progressbar">{toolsAndEquipment.progress}%</div></td>
                  </tr>

               })}
            </tbody>

         </table>

      </div >
   );
}