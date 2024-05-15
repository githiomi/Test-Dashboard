import Image from "next/image";

export default function ReceptionSummaryPage() {

   const summaryItems: ReceptionSummary[] = [
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
   ];
   return (
      <div>

         <h1 className="text-2xl font-bold">Reception Summary</h1>

         <div className="summary-items flex flex-col gap-[1rem]">

            {
               summaryItems.map((summaryItem, index) => {
                  return <div key={index} 
                              className="summary-item flex gap-[2rem]">

                     <Image
                        src={summaryItem.imageUrl}
                        alt="Packages Image"
                        width={50}
                        height={50} />

                     <p className="font-bold">{summaryItem.summaryName}</p>

                     <p className="font-bold">{summaryItem.summaryQuantity}</p>
                  </div>
               })
            }

         </div>
      </div>
   );
}