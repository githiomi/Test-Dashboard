import MissingItemsComponent from "@/components/missing_items";
import RentalToolsComponent from "@/components/rental_tools";
import RestockItemsComponent from "@/components/restock_items";
import ToolsAndEquipmentAvailability from "@/components/tools_and_equipment";
import WorkOrderStatusPage from "@/components/workorder_status";

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
      </div>

    </main>
  );
}
