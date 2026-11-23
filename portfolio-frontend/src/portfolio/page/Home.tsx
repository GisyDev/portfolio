import About from '../ui/Start'
import Experience from '../ui/Experience';
import Formation from '../ui/Formations';
import useAnimationInterceptionObserver from '../hooks/useAnimationInterceptionObserver';
import AboutMe from '../ui/AboutMe';
import PageBackground from '../components/PageBackground';
import Projects from '../ui/Projects';

const Home = () => {

  useAnimationInterceptionObserver()

  return (
    <>
  
        {/* <Background />  */}
        <About />
        <Experience />
        {/* <Projects/> */}
        {/* <Skills /> */}
        {/* <Formation/> */}
        <AboutMe />
        <Projects/>
    </>

  )
}

export default Home