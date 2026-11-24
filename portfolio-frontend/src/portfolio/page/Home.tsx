import About from '../ui/AboutMe'
import Experience from '../ui/Experience';
import useAnimationInterceptionObserver from '../hooks/useAnimationInterceptionObserver';
import Projects from '../ui/Projects';
import ComplementaryTraining from '../ui/ComplementaryTraining';
import LanguagesCarrusel from '../ui/LanguagesCarrusel';

const Home = () => {

  useAnimationInterceptionObserver()

  return (
    <>
        <About />
        <LanguagesCarrusel/>
        <Experience />
        <Projects/>
        <ComplementaryTraining/>
    </>

  )
}

export default Home