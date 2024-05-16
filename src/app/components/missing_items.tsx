'use client';

import Image from "next/image";
import { MissingItem } from "../lib/interfaces/missing_item";
import { getMissingRentals } from "../services/card_table_service";

export default function MissingItemsComponent() {
   const missingItems: MissingItem[] = getMissingRentals();

   return (
      <div className="bg-white text-black rounded-badge shadow-xl hover:shadow-2xl px-10 py-2 m-5 border-[1px] border-brown min-w-[40%]">
         <div className="flex items-center gap-5 my-5">
            <Image
               src="/warning.png"
               alt="Rental Tools"
               width="50"
               height="50"
               className="bg-white"
            />
            <h1 className="text-3xl font-bold">Missing Items</h1>
         </div>

         <table className="table table-md text-center">
            <thead>
               <tr>
                  <th>Tool Ref</th>
                  <th>Team Member</th>
                  <th></th>
               </tr>
            </thead>

            <tbody>
               {missingItems.map((missingItem, index) => {
                  return (
                     <tr key={index}>
                        <td>
                           <span className="bg-gray px-2 py-1 rounded-md">{missingItem.toolRef}</span>
                        </td>
                        <td className="mt-2 grow flex items-center justify-center gap-2">
                           <Image
                              src={missingItem.teamMember.memberImage}
                              alt="Team Member Iamge"
                              width={40}
                              height={40}
                              className="rounded-full"
                           />

                           <p className="text-md">{missingItem.teamMember.memberName}</p>

                           <Image
                              src={missingItem.teamMember.memberTrophy}
                              alt="Team Member Trophy"
                              width="20"
                              height="20"
                              className="rounded"
                           />
                        </td>
                        <td>
                           <button className="btn btn-primary text-white">
                              Details
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
