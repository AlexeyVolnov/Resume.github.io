import './App.css'
import Sidebar from "./components/sidebar/Sidebar.tsx";
import Skills from "./components/skills/Skills.tsx";
import About from "./components/About/About.tsx";
import Content from "./components/Content/Content.tsx";


function App() {


  return (
     <div className={'appContainer'}>
       <div className={'app'}>
         <Sidebar/>
         <div className={'contain'}>
           <div className={'content'}>
             <div className={'grid grid-cols-[1.5fr,1fr] max-xl:grid-cols-[1fr]  pt-10 gap-5'}>
               <Content/>
               <Skills/>
             </div>
           </div>
           <About/>
         </div>
       </div>
     </div>

  )
}

export default App
