import { ToolsAndEquipment } from "../lib/interfaces/tool_and_equipment"

export const getToolEquipmentAvailability = (): ToolsAndEquipment[] => {
   return [
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
   ]
}

export const getReception = (): ReceptionSummary[] => {
   return [
      {
         imageUrl: "/packages.png",
         summaryName: "Packages Received",
         summaryQuantity: 10
      },
      {
         imageUrl: "/packages.png",
         summaryName: "Processed Packages",
         summaryQuantity: 5
      }
   ]
}