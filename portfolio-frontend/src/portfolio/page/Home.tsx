import Header from '../ui/Header'
import About from '../ui/About'
import Experience from '../ui/Experience';
import Education from '../ui/Formations';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router-dom';



const Home = () => {


  return (
    <>
      {/* <Background />  */}
      <About/>
      <Experience />
      {/* <Projects/> */}
      {/* <Skills /> */}
      <Education />
      <Outlet/>
    </>

  )
}

export default Home