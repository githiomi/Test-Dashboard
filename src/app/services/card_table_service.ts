import { MissingItem } from "../lib/interfaces/missing_item"
import { RentalTool } from "../lib/interfaces/rental_tool"
import { RestockItem } from "../lib/interfaces/restock_item"

export const getCheckedOutRentals = (): RentalTool[] => {

   return [
      {
         workorder: '01',
         toolref: 6456,
         teammember: {
            memberImage: "/user_alex.jpeg",
            memberName: "Alex Norman",
            memberTrophy: "/medal.png"
         },
         status: 'Completed',
         duration: '15:00'
      },
      {
         workorder: '02',
         toolref: 5665,
         teammember: {
            memberImage: "/user_razib.jpg",
            memberName: "Razib Rahman",
            memberTrophy: "/trophy.png"
         },
         status: 'In Progress',
         duration: '05:00'
      },
      {
         workorder: '03',
         toolref: 1775,
         teammember: {
            memberImage: "/user_luke.jpg",
            memberName: "Luke Norton",
            memberTrophy: "/star.png"
         },
         status: 'Not Started',
         duration: '00:00'
      }
   ]
}

export const getMissingRentals = (): MissingItem[] => {
   return [
      {
         toolRef: 6465,
         teamMember: {
            memberImage: "/user_alex.jpeg",
            memberName: "Alex Norman",
            memberTrophy: "/medal.png",
         },
      },
      {
         toolRef: 6466,
         teamMember: {
            memberImage: "/user_alex.jpeg",
            memberName: "Alex Norman",
            memberTrophy: "/medal.png",
         },
      },
      {
         toolRef: 6467,
         teamMember: {
            memberImage: "/user_alex.jpeg",
            memberName: "Alex Norman",
            memberTrophy: "/medal.png",
         },
      },
   ]
}

export const getItemsToRestock = (): RestockItem[] => {
   return [
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
}