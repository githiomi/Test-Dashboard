import { WorkOrder } from "../lib/interfaces/work_order";

export const getWorkOrderStatus = (): WorkOrder[] => {
   return [
      {
         status: 'Completed',
         number: 7
      },
      {
         status: 'Work In Progress',
         number: 3
      },
      {
         status: 'Due',
         number: 2
      }
   ]
}