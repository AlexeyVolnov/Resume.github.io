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
    Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium corporis culpa dicta doloremque doloribus ducimus, ipsa iste magni molestias nisi perferendis placeat quas quo rem sint ullam? Quibusdam, vero.',
  },
  {
    startDate: 2012,
    finalDate: 2017,
    Title: 'Инженер-Программист',
    nameOrganization: 'Оренбургский государственный аграрный университет',
    Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium corporis culpa dicta doloremque doloribus ducimus, ipsa iste magni molestias nisi perferendis placeat quas quo rem sint ullam? Quibusdam, vero.',
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