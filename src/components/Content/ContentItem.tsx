import {FC} from "react";
import DateLine from "../Working/DateLine.tsx";
import {IWorkAndEducation} from "../Working/Work.tsx";


interface IContentItemProps {
  item: IWorkAndEducation
}


const ContentItem: FC<IContentItemProps> = ({item}) => {


  return (
       <div className={'flex contentItem items-center gap-5'}>
         <div className={'line'}>
           <DateLine startDate={item.startDate}  finalDate={item.finalDate}/>
         </div>
         <div className={'work_info justify-self-center justify-center h-full flex flex-col flex-1'}>
           <h4 className={'font-bold text-2xl text-[#2b384a] py-3.5'}>{item.Title}</h4>
           <p className={'smallDate'}>C {item.startDate} по {item.finalDate} г.</p>
           <p>{item.nameOrganization}</p>
           <p className={'py-5 text-gray-950 font-thin'}>{item.Text}</p>
         </div>
       </div>
  )
}

export default ContentItem