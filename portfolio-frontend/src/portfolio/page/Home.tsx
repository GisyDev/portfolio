import About from '../ui/About'
import Experience from '../ui/Experience';
import Formation from '../ui/Formations';
import useAnimationInterceptionObserver from '../hooks/useAnimationInterceptionObserver';

const Home = () => {

  useAnimationInterceptionObserver()

  return (
    <>
      {/* <Background />  */}
      <About/>
      <Experience />
      {/* <Projects/> */}
      {/* <Skills /> */}
      <Formation/>
      
    </>

  )
}

export default Home