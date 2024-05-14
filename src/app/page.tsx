import MissingItemsComponent from "@/components/missing_items";
import RentalToolsComponent from "@/components/rental_tools";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex">
      
      <RentalToolsComponent />

      <MissingItemsComponent />
      
    </main>
  );
}
