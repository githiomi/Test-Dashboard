import Image from 'next/image';

interface RentalTool {
   workorder:string;
   toolref:number;
   teammember:TeamMember;
   status: 'Completed' | 'In Progress' | 'Not Started';
   duration:string;
}

interface TeamMember {
   memberImage:string;
   memberName:string;
   memberTrophy:string;
}

export default function RentalToolsComponent() {

   const rental_tools : RentalTool[] = [
      {
         workorder:'01',
         toolref:6456,
         teammember: {
            memberImage: "/settings.png",
            memberName: "Allan Norman",
            memberTrophy: "/logo.png"
         },
         status: 'Completed',
         duration: '15:00'
      },
      {
         workorder:'02',
         toolref:5665,
         teammember: {
            memberImage: "/settings.png",
            memberName: "Razib Rahman",
            memberTrophy: "/logo.png"
         },
         status: 'In Progress',
         duration: '05:00'
      },
      {
         workorder:'03',
         toolref:1775,
         teammember: {
            memberImage: "/settings.png",
            memberName: "Luke Norton",
            memberTrophy: "/logo.png"
         },
         status: 'Not Started',
         duration: '00:00'
      }
   ]

   return <div className='bg-white text-black rounded-lg shadow-xl hover:shadow-2xl px-10 py-5 m-5'>

      <div className='flex items-center gap-5 my-5'>
         <Image
            src="/settings.png"
            alt='Rental Tools'
            width='40'
            height='40'
            className='bg-white' />
         <h1 className='text-2xl font-bold'>Rental Tools</h1>
      </div>

      <table className="table table-zebra">
         <thead>
            <tr>
               <th>Work Order</th>
               <th>Tool Ref</th>
               <th>Team Member</th>
               <th>Status</th>
               <th>Duration</th>
               <th></th>
            </tr>
         </thead>
      
         <tbody>{rental_tools.map( (rental_tool, index) => {
                  return <tr key={index} className='text-center'>
                           <td>{rental_tool.workorder}</td>
                           <td>
                              <span className="bg-gray px-2 py-1 rounded-md">{rental_tool.toolref}</span>
                           </td>
                           <td className='flex items-center justify-center'>
                              <Image 
                                 src={rental_tool.teammember.memberImage}
                                 alt="Team Member Iamge"
                                 width="20"
                                 height="20"
                                 className="rounded" />

                              {rental_tool.teammember.memberName}

                              <Image 
                                 src={rental_tool.teammember.memberTrophy}
                                 alt="Team Member Trophy"
                                 width="20"
                                 height="20"
                                 className="rounded" />
                           </td>
                           <td>
                              <div className="status rounded-full bg-brown w-4 h-4 border-solid p-2 border-2 "></div>
                              {rental_tool.status}
                           </td>
                           <td>{rental_tool.duration}</td>
                           <td>
                              <button className="btn btn-outline btn-primary">Details</button>
                           </td>
                  </tr>
               })
            }
         </tbody>
      </table>
   </div>
}
