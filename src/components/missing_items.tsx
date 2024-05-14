import Image from "next/image";

interface MissingItem {
   toolRef: number;
   teamMember: TeamMember;
}

export default function MissingItemsComponent() {
   const missingItems: MissingItem[] = [
      {
         toolRef: 6465,
         teamMember: {
            memberImage: "/settings.png",
            memberName: "Alex Norman",
            memberTrophy: "/logo.png",
         },
      },
      {
         toolRef: 6466,
         teamMember: {
            memberImage: "/settings.png",
            memberName: "Alex Norman",
            memberTrophy: "/logo.png",
         },
      },
      {
         toolRef: 6467,
         teamMember: {
            memberImage: "/settings.png",
            memberName: "Alex Norman",
            memberTrophy: "/logo.png",
         },
      },
   ];

   return (
      <div className="bg-white text-black rounded-lg shadow-xl hover:shadow-2xl px-10 py-5 m-5">
         <div className="flex items-center gap-5 my-5">
            <Image
               src="/warning.png"
               alt="Rental Tools"
               width="50"
               height="50"
               className="bg-white"
            />
            <h1 className="text-2xl font-bold">Missing Items</h1>
         </div>

         <table className="table table-md">
            <thead>
               <th>Tool Ref</th>
               <th>Team Member</th>
               <th></th>
            </thead>

            <tbody>
               {missingItems.map((missingItem, index) => {
                  return (
                     <tr key={index}>
                        <td>{missingItem.toolRef}</td>
                        <td className="flex items-center justify-center">
                           <Image
                              src={missingItem.teamMember.memberImage}
                              alt="Team Member Iamge"
                              width="20"
                              height="20"
                              className="rounded"
                           />

                           {missingItem.teamMember.memberName}

                           <Image
                              src={missingItem.teamMember.memberTrophy}
                              alt="Team Member Trophy"
                              width="20"
                              height="20"
                              className="rounded"
                           />
                        </td>
                        <td>
                           <button className="btn btn-outline btn-primary">
                              Details
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
