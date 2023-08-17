import ContentLoader from "react-content-loader"
import {FC} from "react";

interface IWorkLineItem {
  startDate: number,
  finalDate: number
}


const WorkLineItem: FC<IWorkLineItem> = ({startDate, finalDate}) => (
   <ContentLoader
      speed={7}
      width={150}
      height={310}
      viewBox="0 0 150 310"
      backgroundColor="#666d8f"
      foregroundColor="#ecd4d4"
   >

     <rect x="20" y="0" rx="0" ry="0" width="3" height="283"/>
     <circle cx="22" cy="40" r="6"/>
     <circle cx="22" cy="260" r="6"/>
     <rect width='100' opacity={0.1} x='40' y="5" cx="80" cy="50" ry="5" height='70'></rect>
     <text x={70} y={55} color="black" fontWeight="bold">{startDate}</text>
     <text x={70} y={30} color="black" fontWeight="bold">{finalDate}</text>

   </ContentLoader>
)

export default WorkLineItem