import {FC} from "react";
import ContentItem from "../Content/ContentItem.tsx";



interface IWorkProps {
}


export interface IWorkAndEducation {
  startDate: number,
  finalDate: number,
  Title: string,
  Text?: string | any,
  nameOrganization: string
}

const work: IWorkAndEducation[] = [
  {
    startDate: 2015,
    finalDate: 2023,
    Title: 'Инженер-программист',
    nameOrganization: 'Газпром',
    Text:<ul>
      <li className='workExperienseTitle'>
        Задачи которые приходилось решать :
      </li>
      <li className='workExperienseText'>
        Была проблема с отображением газопроводов на картах, такие сервисы как (GoogleMap,YandexMap) не подходили из-за специфичности задачи, решили наложением нашей логики на созданную карту, с составлением координат и метрик полученных с GPS трекеров c которыми ходил рабочий класс,проект был очень огромный и работа над ним велась по мере поступления данных, что усложняло ситуацию в разработке продукта (так как все забывалось 😁)</li>
      <li className='workExperienseTitle'>
        Из стандартных задач:
      </li>
      <ul className='workExperienseText'>
        <li>- Создание компонент</li>
        <li>- Верстка</li>
        <li>- Составление ТЗ</li>
        <li>...</li>
        <li>- Ну и честно говоря хардкор был но это уже совсем другая история...😌 с большим удовольствием расскажу если будет интересно</li>
      </ul>
    </ul>
  }
]

const Work: FC<IWorkProps> = ({}) => {
  return (
     <div>
       {work.map(item => <ContentItem key={item.Title} item={item}/>)}
     </div>

  )
}

export default Work