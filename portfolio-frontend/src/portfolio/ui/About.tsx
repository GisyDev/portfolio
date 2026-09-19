import { about_me, social_media } from '../data/about'
import cara from "../../assets/images/yo.jpeg"
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton'
import Paragraph from '../components/Paragraph'
import AccentButton from '../components/AccentButton'
import { sectionsNav } from '../data/nav'
import { useNavigate } from 'react-router-dom';


const About = () => {

    const { name, profile, description } = about_me

    const navigate = useNavigate()

    return (
        <section className='flex items-center scroll-m-30' id={sectionsNav.about.id} data-section={sectionsNav.about.id}>
            <article className='flex gap-12'>
                <div className='flex gap-5 justify-between w-3/4'>
                    <div className='flex flex-col space-y-6 '>
                        <div className='space-y-3'>
                            <AccentButton className='bg-secondary-background text-primary/90 border-primary/50'>
                                <span className='bg-primary/90 w-1 h-1 p-1 rounded-full'/>
                                <p>Disponible para trabajar - Santa Cruz de Tenerife</p>
                            </AccentButton>

                            <h1 className='text-5xl font-bold'>{name}</h1>
                            <h3 className='flex gap-5 text-3xl text-primary font-semibold'>{profile}</h3>
                        </div>
                        <Paragraph> {description} </Paragraph>

                        <div className='flex space-x-3'>
                            <PrimaryButton className='bg-primary hover:bg-primary-hover'>
                                <i className="fa-solid fa-download"></i>
                                <p>Descargar CV</p>
                            </PrimaryButton>

                            <PrimaryButton className='bg-gray-500 hover:bg-gray-500/90' onClick={() => navigate("SobreMi")}>
                                <i className="fa-solid fa-circle-info"></i>
                                <p>Más información</p>
                            </PrimaryButton>
                        </div>



                        <div className='space-x-3'>
                            {social_media.map((social) => {
                                return (
                                    <SecondaryButton className='border-primary' key={social.name}>
                                        <a className="flex items-center gap-2" href={social.link} target="blank">
                                            <i className={`${social.icon}`}></i>
                                            {social.name && <p className='font-semibold'>{social.name}</p>}
                                        </a>
                                    </SecondaryButton>

                                );
                            })}
                        </div>

                    </div>
                </div>
                <div className='flex items-center w-1/3'>
                    <img src={cara} alt="Yo" className='w-full rounded-2xl text-primary-button border-4 border-primary ' />
                </div>
            </article>

        </section>
    )
}




export default About