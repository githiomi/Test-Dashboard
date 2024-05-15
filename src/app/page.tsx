import MissingItemsComponent from "@/app/components/missing_items";
import RentalToolsComponent from "@/app/components/rental_tools";
import RestockItemsComponent from "@/app/components/restock_items";
import ToolsAndEquipmentAvailability from "@/app/components/tools_and_equipment";
import WorkOrderStatusPage from "@/app/components/workorder_status";
import ReceptionSummaryPage from "./components/reception_summary";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex-col">

      <div className="topRow flex w-full">
        {/* The Rental Tools Component */}
        <RentalToolsComponent />

        {/* Work Order Status Component */}
        <WorkOrderStatusPage />
        
      </div>

      <div className="middleRow flex">

        {/* The Missing Items Component */}
        <MissingItemsComponent />

        <ToolsAndEquipmentAvailability />
      </div>

      <div className="bottomRow flex">
        <RestockItemsComponent />

        <ReceptionSummaryPage />
      </div>

    </main>
  );
}
