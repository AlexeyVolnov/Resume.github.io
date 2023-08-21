import {FC} from "react";
import Title from "../Title.tsx";


interface IAboutProps {

}


const About: FC<IAboutProps> = ({}) => {
  return (
     <div>
       <div className={'aboutMy mt-10'}>
         <Title>
           <h5>Обо мне</h5>
         </Title>
         В дальнейшей перспективе хотелось бы начать работать с Backend чтобы максимально охватить область. Умею объяснить тяжелые вещи простым языком.
         Последний год работаю на Freelance. Хочу работать в команде.
       </div>
     </div>
  )
}

export default About