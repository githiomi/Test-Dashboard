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
      <div className="grow rounded-badge px-10 py-2 m-5 flex flex-col min-h-full">

         <div className='flex items-center gap-5 my-5'>
            <h1 className='text-3xl font-bold'>Reception Summary</h1>
         </div>

         <div className="grow justify-center flex flex-col gap-10">
            {
               summaryItems.map((summaryItem, index) => {
                  return <div key={index}
                     className="summary-item w-full flex items-center justify-between">

                     <Image
                        src={summaryItem.imageUrl}
                        alt="Packages Image"
                        width={70}
                        height={70} />

                     <p className="font-bold">{summaryItem.summaryName}</p>

                     <p className="font-bold">{summaryItem.summaryQuantity}</p>
                  </div>
               })
            }
         </div>
      </div>
   );
}