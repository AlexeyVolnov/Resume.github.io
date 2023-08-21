
import {FC} from "react";
import ContentLoader from "react-content-loader";

interface IDateLine {
  startDate: number,
  finalDate: number,

}


const DateLine: FC<IDateLine> = ({startDate, finalDate}) =>(
     <ContentLoader
        speed={7}
        width={150}
        height={310}

        viewBox="0 0 150 310"
        backgroundColor="#666d8f"
        foregroundColor="#ecd4d4"
        className={'svgLoader'}
     >
       <rect x="20" y="0" rx="0" ry="0" width="3"  height="300px"/>
       <circle cx="22" cy="40" r="6"/>
       <circle cx="22" cy="260" r="6"/>
       <rect width='100' className='rect' opacity={0.1} x='40' y="5" cx="80" cy="50" ry="5" height='60'></rect>
       <text x={70} className={'svgText'} y={257} color="black" fontWeight="bold">{startDate}</text>
       <rect width='100' opacity={0.1} className='rect' x='40' y="220" cx="80" cy="50" ry="5" height='60'></rect>
       <text x={70} y={40} className={'svgText'} color="black" fontWeight="bold">{finalDate}</text>
     </ContentLoader>

  )






export default DateLine