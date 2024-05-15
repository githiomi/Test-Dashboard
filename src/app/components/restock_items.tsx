import Image from 'next/image';

interface RestockItem {
   toolref: number;
   toolOrEquipment: string;
   status: 'Low' | 'None';
}

export default function RestockItemsComponent() {

   const restockItems: RestockItem[] = [
      {
         toolref: 6465,
         toolOrEquipment: 'Screws',
         status: 'Low',
      },
      {
         toolref: 6466,
         toolOrEquipment: 'Wires (Electrical)',
         status: 'None',
      },
      {
         toolref: 6467,
         toolOrEquipment: 'Bolts',
         status: 'None',
      }
   ]

   return <div className='bg-white text-black rounded-lg shadow-xl hover:shadow-2xl px-10 py-5 m-5'>

      <div className='flex items-center gap-5 my-5'>
         <h1 className='text-2xl font-bold'>Restock Items</h1>
      </div>

      <table className="table table-md">
         <thead>
            <tr>
               <th>Tool Ref</th>
               <th>Tool/Equipment</th>
               <th>Status</th>
               <th></th>
            </tr>
         </thead>

         <tbody>{restockItems.map((restockItem: RestockItem, index: number) => {
            return <tr key={index} className='text-center'>
               <td>
                  <span className="bg-gray px-2 py-1 rounded-md">{restockItem.toolref}</span>
               </td>
               <td className='flex items-center justify-center'>
                  {restockItem.toolOrEquipment}
               </td>
               <td>
                  <div className='status rounded-full bg-orange w-2 h-2 p-2 border-solid border-black'></div>
                  {restockItem.status}
               </td>
               <td>
                  <button className="btn text-white btn-primary">Details</button>
               </td>
            </tr>
         })
         }
         </tbody>
      </table>
   </div>
}
