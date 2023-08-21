import {FC} from "react";
import {IWorkAndEducation} from "../Working/Work.tsx";
import ContentItem from "../Content/ContentItem.tsx";


interface IEducationProps {}



const educations: IWorkAndEducation[] = [
  {
    startDate: 2017,
    finalDate: 2022,
    Title: 'Инженер',
    nameOrganization: 'Самарский государственный технический университет',
  },
  {
    startDate: 2012,
    finalDate: 2017,
    Title: 'Инженер-Программист',
    nameOrganization: 'Оренбургский государственный аграрный университет',
  }
]


const Education: FC<IEducationProps> = () => {
  return (
     <div>
       {educations.map(item=><ContentItem key={item.Title} item={item}/>)}
     </div>
  )
}

export default Education