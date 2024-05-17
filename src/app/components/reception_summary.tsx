'use client';

import Image from "next/image";
import { getReception } from "../api/card_information_service";

export default function ReceptionSummaryPage() {

   const summaryItems: ReceptionSummary[] = getReception();
   return (
      <div className="grow rounded-badge px-10 py-2 m-5 flex flex-col min-h-full">

         <div className='flex items-center gap-5 my-5'>
            <h1 className='text-3xl font-bold'>Reception Summary</h1>
         </div>

         <div className="grow justify-center flex flex-col gap-10">
            {
               summaryItems.map((summaryItem, index) => {
                  return <div key={index}
                     className="summary-item w-full flex items-center justify-between">

                     <div className="relative">
                        <Image
                           src={summaryItem.imageUrl}
                           alt="Packages Image"
                           width={70}
                           height={70} />

                        <Image src={'/tick.png'}
                           alt="Completed Green Tick"
                           className="absolute bottom-[-.5rem] right-[-.5rem]"
                           width={20}
                           height={15}
                           hidden={!summaryItem.completed} />
                     </div>

                     <p className="font-bold">{summaryItem.summaryName}</p>

                     <p className="font-bold">{summaryItem.summaryQuantity}</p>
                  </div>
               })
            }
         </div>
      </div>
   );
}