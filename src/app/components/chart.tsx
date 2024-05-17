import Image from 'next/image';

export default function DonutChart() {
   return (
      <div>
         <Image
            src={'/donut_chart.png'}
            alt='This is the donut chart'
            quality={100}
            width={150}
            height={150} />
      </div>
   );
}