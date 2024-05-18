import MissingItemsComponent from "@/app/components/missing_items";
import RentalToolsComponent from "@/app/components/rental_tools";
import RestockItemsComponent from "@/app/components/restock_items";
import ToolsAndEquipmentAvailability from "@/app/components/tools_and_equipment";
import WorkOrderStatusPage from "@/app/components/workorder_status";
import ReceptionSummaryPage from "./components/reception_summary";
import { MissingItem } from "./lib/interfaces/missing_item";
import { getCheckedOutRentals, getItemsToRestock, getMissingRentals, } from "./api/card_table_service";
import { RentalTool } from "./lib/interfaces/rental_tool";
import { WorkOrder } from "./lib/interfaces/work_order";
import { getWorkOrderStatus } from "./api/indicator_widget_service";
import { ToolsAndEquipment } from "./lib/interfaces/tool_and_equipment";
import { getReception, getToolEquipmentAvailability } from "./api/card_information_service";
import { RestockItem } from "./lib/interfaces/restock_item";

export default function Home() {

  // Simulated API calls
  const missingItems: MissingItem[] = getMissingRentals();
  const workingOrders: WorkOrder[] = getWorkOrderStatus();
  const restockItems: RestockItem[] = getItemsToRestock();
  const rentalTools: RentalTool[] = getCheckedOutRentals();
  const receptionSummaries: ReceptionSummary[] = getReception();
  const toolsAndEquipment: ToolsAndEquipment[] = getToolEquipmentAvailability();

  return (
    <main className="absolute pl-24 top-0 min-h-screen flex-col grow bg-[#eceeef] w-[100%]">

      <div className="topRow flex flex-col lg:flex-row w-full">
        {/* The Rental Tools Component */}
        <RentalToolsComponent rowItems={rentalTools} />

        {/* Work Order Status Component */}
        <WorkOrderStatusPage rowItems={workingOrders} />

      </div>

      <div className="middleRow flex flex-col lg:flex-row w-full">

        {/* The Missing Items Component */}
        <MissingItemsComponent rowItems={missingItems} />

        {/* Tools and Equipment Availability Component */}
        <ToolsAndEquipmentAvailability rowItems={toolsAndEquipment} />
      </div>

      <div className="bottomRow flex flex-col lg:flex-row w-full">
        {/* Restock Items Component */}
        <RestockItemsComponent rowItems={restockItems} />

        {/* Reception summary Component */}
        <ReceptionSummaryPage rowItems={receptionSummaries} />
      </div>

    </main>
  );
}
