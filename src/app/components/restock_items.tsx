import { RestockItem } from "../lib/interfaces/restock_item"
import { getItemsToRestock } from "../services/card_table_service"

export default function RestockItemsComponent() {

   const restockItems: RestockItem[] = getItemsToRestock();

   return <div className='bg-white text-black rounded-badge shadow-xl hover:shadow-2xl px-10 py-5 m-5 border-[1px] border-brown min-w-[60%]'>

      <div className='flex items-center gap-5 my-5'>
         <h1 className='text-3xl font-bold'>Restock Items</h1>
      </div>

      <table className="table table-md text-center">
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
               <td>
                  {restockItem.toolOrEquipment}
               </td>
               <td className='mt-2 flex gap-2 items-center justify-center'>
                  <div className={
                     restockItem.status == "None" ? 'status rounded-full bg-red w-2 h-2 p-2 border-solid border-black' : 'status rounded-full bg-orange w-2 h-2 p-2 border-solid border-black'
                  }></div>
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
