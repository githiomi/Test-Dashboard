export interface RentalTool {
   workorder: string;
   toolref: number;
   teammember: TeamMember;
   status: 'Completed' | 'In Progress' | 'Not Started';
   duration: string;
}