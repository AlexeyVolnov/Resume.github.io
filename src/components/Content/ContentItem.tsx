import {createRef, FC, useEffect, useRef} from "react";
import DateLine from "../Working/DateLine.tsx";
import {IWorkAndEducation} from "../Working/Work.tsx";


interface IContentItemProps {
  item: IWorkAndEducation
}


const ContentItem: FC<IContentItemProps> = ({item}) => {

  const refBlockText = createRef();
const resizeSvg = ()=>{

}

  return (
     <div>
       <div className={'flex gap-5'}>
         <div className={''}>
           <DateLine startDate={item.startDate} refBlockText={refBlockText} resizeSvg={}  finalDate={item.finalDate}/>
         </div>
         <div ref={refBlockText} className={'work_info justify-center flex flex-col flex-1'}>
           <h4 className={'font-bold text-2xl text-[#2b384a] py-3.5'}>{item.Title}</h4>
           <p>{item.nameOrganization}</p>
           <p className={'py-5 text-gray-700 font-thin'}>{item.Text}</p>
         </div>
       </div>
     </div>
  )
}

export default ContentItem