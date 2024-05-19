'use client';

import clsx from "clsx";
import DonutChart from "./chart";
import { WorkOrder } from "../lib/interfaces/work_order";


export default function WorkOrderStatusPage({ rowItems: workOrders }: CardProps<WorkOrder[]>) {

   return (
      <div className="bg-white text-black rounded-badge shadow-xl hover:shadow-2xl px-10 py-5 m-5 border-[1px] border-brown grow flex flex-col">

         <h1 className="m-2 text-3xl font-bold">Work Order Status</h1>

         <div className="flex gap-3 grow items-center">

            <div>

               {/* Donut Chart Display */}
               <DonutChart />

            </div>

            <table className="grow">
               <tbody>

                  {
                     workOrders.map((workOrder, index) => {
                        return <tr key={index}>

                           <td className="flex items-center gap-3 my-1">
                              <div className={clsx('w-[10px] h-[10px] rounded-full m-1', {
                                 "bg-green": workOrder.status == "Completed",
                                 "bg-orange": workOrder.status == "Work In Progress",
                                 "bg-red": workOrder.status == "Due"
                              }
                              )} />
                              {workOrder.status}
                           </td>

                           <td>{workOrder.number}</td>

                        </tr>
                     })
                  }

               </tbody>

            </table>
         </div>

      </div >
   );
}