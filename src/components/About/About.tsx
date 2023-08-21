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
         Долго выбирал в какую область IT погрузиться разбирал такие языки как (Python,Java) остановился на экосистеме
         языка JS. В дальнейшей перспективе хотелось бы начать работать с Backend чтобы максимально охватить область. Со
         мной легко работать. На прошлой работе была текучка кадров в связи с этим понял что я умею учить и объяснять.
         Последний год работаю на Freelance и честно сказать очень не хватает командной работы.
       </div>
     </div>
  )
}

export default About