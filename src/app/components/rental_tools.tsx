import Image from 'next/image';

interface RentalTool {
   workorder:string;
   toolref:number;
   teammember:TeamMember;
   status: 'Completed' | 'In Progress' | 'Not Started';
   duration:string;
}

export default function RentalToolsComponent() {

   const rentalTools : RentalTool[] = [
      {
         workorder:'01',
         toolref:6456,
         teammember: {
            memberImage: "/user_alex.jpeg",
            memberName: "Alex Norman",
            memberTrophy: "/logo.png"
         },
         status: 'Completed',
         duration: '15:00'
      },
      {
         workorder:'02',
         toolref:5665,
         teammember: {
            memberImage: "/user_razib.jpg",
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
            memberImage: "/user_luke.jpg",
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

      <table className="table table-md">
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
      
         <tbody>{rentalTools.map( (rentalTool, index) => {
                  return <tr key={index} className='text-center'>
                           <td>{rentalTool.workorder}</td>
                           <td>
                              <span className="bg-gray px-2 py-1 rounded-md">{rentalTool.toolref}</span>
                           </td>
                           <td className='flex items-center justify-center gap-[1rem] mt-1'>
                              <Image 
                                 src={rentalTool.teammember.memberImage}
                                 alt="Team Member Iamge"
                                 width={50}
                                 height={100}
                                 className="bg-black rounded-full" />

                              {rentalTool.teammember.memberName}

                              <Image 
                                 src={rentalTool.teammember.memberTrophy}
                                 alt="Team Member Trophy"
                                 width="40"
                                 height="50"
                                 className="rounded" />
                           </td>
                           <td>
                              <div className="status rounded-full bg-brown w-4 h-4 border-solid p-2 border-2 "></div>
                              {rentalTool.status}
                           </td>
                           <td>{rentalTool.duration}</td>
                           <td>
                              <button className="btn text-white btn-primary">Details</button>
                           </td>
                  </tr>
               })
            }
         </tbody>
      </table>
   </div>
}
