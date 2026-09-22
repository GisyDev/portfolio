import { about_me } from '../data/about'
import Paragraph from '../components/Paragraph'
import MiniButton from '../components/MiniButton';
import { useMatch, useNavigate } from 'react-router-dom'
import { p } from 'motion/react-client';


const AboutMe = () => {

    const { profile, full_description, soft_skills, languajes, more_information } = about_me

    const navigate = useNavigate()


    return (
        <section className='max-w-page m-auto animate-fade-in'>
            <div className='space-y-10'>
                <div className='space-y-2'>
                    <div className='flex flex-col justify-between gap-3'>
                        <button className='flex gap-1 items-center text-sm cursor-pointer text-terceary hover:text-terceary/90 tracking-wide font-medium transition-all' onClick={() => navigate("/portfolio")}>
                            <i className="fa-solid fa-arrow-left"></i>
                            <a className=''>Volver al inicio</a>
                        </button>
                 

                        <h1 className='text-4xl font-bold'>Más información sobre mí</h1>
                    </div>
                    <p className='text-2xl text-primary font-semibold'>{profile}</p>
                    <div className='mt-5 space-y-5'>
                        {
                            full_description.map((paragraph) => {
                                return <Paragraph>{paragraph}</Paragraph>
                            })
                        }
                    </div>
                </div>


                <div className='space-y-4'>
                    <h3 className='text-lg font-semibold'>Aptitudes</h3>
                    <ul className='flex gap-5 mt-2 flex-wrap'>
                        {
                            soft_skills.map((skill) => {

                                return <li>
                                    <MiniButton>
                                        <i className={`${skill.icon}`}></i>
                                        <p>{skill.name}</p>
                                    </MiniButton>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-semibold'>Más información</h3>
                    <ul className='flex gap-5 mt-2 flex-wrap'>
                        {
                            more_information.map((skill) => {
                                return <li className=''>

                                    <MiniButton>
                                        <i className={`${skill.icon}`}></i>
                                        <div className='flex gap-2'>
                                            <p>{skill.label}</p>
                                            <p>{skill.value}</p>
                                        </div>
                                    </MiniButton >

                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>

        </section>

    )
}

export default AboutMe